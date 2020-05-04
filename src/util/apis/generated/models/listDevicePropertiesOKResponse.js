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
 * List of device properties.
 *
 */
class ListDevicePropertiesOKResponse {
  /**
   * Create a ListDevicePropertiesOKResponse.
   * @property {object} values List of device properties.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ListDevicePropertiesOKResponse
   *
   * @returns {object} metadata of ListDevicePropertiesOKResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ListDevicePropertiesOKResponse',
      type: {
        name: 'Composite',
        className: 'ListDevicePropertiesOKResponse',
        modelProperties: {
          values: {
            required: true,
            serializedName: 'values',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'DevicePropertyTypeElementType',
                  type: {
                    name: 'Enum',
                    allowedValues: [ 'string', 'number', 'boolean', 'date_time' ]
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ListDevicePropertiesOKResponse;