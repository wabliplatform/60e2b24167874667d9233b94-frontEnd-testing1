/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Person model module.
 * @module model/Person
 * @version 1.0.0
 */
class Person {
    /**
     * Constructs a new <code>Person</code>.
     * @alias module:model/Person
     * @param fname {String} 
     * @param lname {String} 
     * @param cname {String} 
     */
    constructor(fname, lname, cname) { 
        
        Person.initialize(this, fname, lname, cname);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fname, lname, cname) { 
        obj['fname'] = fname;
        obj['lname'] = lname;
        obj['cname'] = cname;
    }

    /**
     * Constructs a <code>Person</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Person} obj Optional instance to populate.
     * @return {module:model/Person} The populated <code>Person</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Person();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('fname')) {
                obj['fname'] = ApiClient.convertToType(data['fname'], 'String');
            }
            if (data.hasOwnProperty('lname')) {
                obj['lname'] = ApiClient.convertToType(data['lname'], 'String');
            }
            if (data.hasOwnProperty('cname')) {
                obj['cname'] = ApiClient.convertToType(data['cname'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
Person.prototype['_id'] = undefined;

/**
 * @member {String} fname
 */
Person.prototype['fname'] = undefined;

/**
 * @member {String} lname
 */
Person.prototype['lname'] = undefined;

/**
 * @member {String} cname
 */
Person.prototype['cname'] = undefined;






export default Person;
