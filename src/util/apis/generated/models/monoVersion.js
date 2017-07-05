/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the MonoVersion class.
 * @constructor
 * The Mono version
 *
 * @member {string} [name] The version name
 * 
 * @member {boolean} [current] If the version is current
 * 
 */
function MonoVersion() {
}

/**
 * Defines the metadata of MonoVersion
 *
 * @returns {object} metadata of MonoVersion
 *
 */
MonoVersion.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'MonoVersion',
    type: {
      name: 'Composite',
      className: 'MonoVersion',
      modelProperties: {
        name: {
          required: false,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        current: {
          required: false,
          serializedName: 'current',
          type: {
            name: 'Boolean'
          }
        }
      }
    }
  };
};

module.exports = MonoVersion;