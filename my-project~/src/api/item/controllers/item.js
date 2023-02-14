'use strict';
const stripe = requiure("stripe")(process.env.STRIPE_SECRET_KEY);

/**
 * item controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::item.item');
