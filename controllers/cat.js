'use strict';
 
let uuid = require("uuid");
let Cat = require("../models/Cat");
 
module.exports = {
    createCat: (event, context, callback) => {
        let body = JSON.parse(event.body);

        if (typeof body.name !== "string" || typeof body.kind !== "string") {
            return callback(null, {
                statusCode: 500,
                body: JSON.stringify({
                    error: "The name & kind of cat must be string character.",
                })
            });
        }

        let catItem = {
            id: uuid.v1(),
            name: body.name,
            kind: body.kind
        };

        // create a new record in database
        return Cat.create(catItem, (err, catResult) => {
            if (err) {
                return callback(err);
            }
            return callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    message: "Create a cat sucessfully.",
                    cat: catResult.get()
                })
            });
        });
    },
    findCat: (event, context, callback) => {
        let id = event.pathParameters.id;

        return Cat.find(id, (err, catResult) => {
            if (err) {
                return callback(err);
            }

            let body = {
                statusCode: 404,
                body: JSON.stringify({error: "Cat not found"})
            };

            if (catResult) {
                body.statusCode = 200;
                body.body = JSON.stringify({
                    cat: catResult.get()
                })
            }

            return callback(null, body);
        });
    },
    updateCat: (event, context, callback) => {
        let id = event.pathParameters.id;
        let body = PSON.parse(event.body);

        let item = {
            id: id,
            name: body.name,
            kind: body.kind
        };

        // check exist
        return Cat.find(id, (err, catResult) => {
            if (err) {
                return callback(err);
            }

            if (!catResult) { // not found
                return callback(null, {
                    statusCode: 404,
                    body: JSON.stringify({error: "Cat not found"})
                });
            }

            // update
            return Cat.update(item, (errUpdate, catResultUpdate) => {
                if (errUpdate) {
                    return callback(errUpdate);
                }
                return callback(null, {
                    statusCode: 200,
                    body: JSON.stringify({
                        message: "Update cat successfully.",
                        cat: catResultUpdate.get()
                    })
                });
            })
        });
    }
};
