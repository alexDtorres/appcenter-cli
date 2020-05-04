/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a EventCountErrorModelError.
 */
class EventCountErrorModelError {
  /**
   * Create a EventCountErrorModelError.
   * @property {number} [code] The status code return by the API. It can be 400
   * or 403 or 500.
   * @property {string} [message] The reason for the request failed.
   */
  constructor() {
  }

  /**
   * Defines the metadata of EventCountErrorModelError
   *
   * @returns {object} metadata of EventCountErrorModelError
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EventCountErrorModel_error',
      type: {
        name: 'Composite',
        className: 'EventCountErrorModelError',
        modelProperties: {
          code: {
            required: false,
            serializedName: 'code',
            type: {
              name: 'Number'
            }
          },
          message: {
            required: false,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = EventCountErrorModelError;