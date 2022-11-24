// basic import
import { track, api} from 'lwc';
import cqRecordForm from 'c/cqRecordForm';





// field and schema import

// Object_<Object api name without __c if present>
import OBJECT_LIGHTNING_STUDIO_OBJECT__C from '@salesforce/schema/Lightning_Studio_Object__c';


// Field_<field api name without __c if present>

import FIELD_NAME from '@salesforce/schema/Lightning_Studio_Object__c.Name';

import FIELD_OWNERID from '@salesforce/schema/Lightning_Studio_Object__c.OwnerId';

import FIELD_START_DATE_TIME__C from '@salesforce/schema/Lightning_Studio_Object__c.Start_Date_Time__c';

import FIELD_ACTIVE__C from '@salesforce/schema/Lightning_Studio_Object__c.Active__c';

import FIELD_EMAIL__C from '@salesforce/schema/Lightning_Studio_Object__c.Email__c';

import FIELD_TYPE__C from '@salesforce/schema/Lightning_Studio_Object__c.Type__c';

import FIELD_COMMENTS__C from '@salesforce/schema/Lightning_Studio_Object__c.Comments__c';

import FIELD_CREATEDBYID from '@salesforce/schema/Lightning_Studio_Object__c.CreatedById';

import FIELD_LASTMODIFIEDBYID from '@salesforce/schema/Lightning_Studio_Object__c.LastModifiedById';





// additional Field_<field api name without __c if present>



// Lookup fields Field_<field api name without __c if present>_<name field>


    


    


    


    


    


    


    


    


    



// import section custom label
    
        
import CQCLIENTNAME_INFORMATION from '@salesforce/label/c.CQCLIENTNAME_INFORMATION';
        
    
        
import CQCLIENTNAME_SYSTEM_INFORMATION from '@salesforce/label/c.CQCLIENTNAME_SYSTEM_INFORMATION';
        
    
        
import CQCLIENTNAME_CUSTOM_LINKS from '@salesforce/label/c.CQCLIENTNAME_CUSTOM_LINKS';
        
    


    


// generated to match the indext with the exact value field


// import as array to help in code generation below

const fields = [
 

    
    FIELD_NAME,
    
    FIELD_OWNERID,
    
    FIELD_START_DATE_TIME__C,
    
    FIELD_ACTIVE__C,
    
    FIELD_EMAIL__C,
    
    FIELD_TYPE__C,
    
    FIELD_COMMENTS__C,
    
    FIELD_CREATEDBYID,
    
    FIELD_LASTMODIFIEDBYID,
    
    
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    
];

const lookupDisplayFields = {
    
    
        

        

        

        

        

        

        

        

        

};

const LOOKUP_FILTERS = {};
const DYNAMIC_SOURCES = {};
const FORM_RULES = {"Email__c":{"hidden":{"fields":["Email__c"],"filter":"true"}}};
const FORMULA_FIELDS = {};

export default class cquiClientnameLightningStudioObjectEdit  extends cqRecordForm {
    
    @track
    sectionHider = {};
    fieldsToTrack = [];
    saveImmediate = false;

    constructor() {
        super();
        this.init(OBJECT_LIGHTNING_STUDIO_OBJECT__C,fields,lookupDisplayFields);
        
        
        this.sectionHider = {"expando_unique_id_1":true,"expando_unique_id_2":true,"expando_unique_id_3":true}

        // Extend rules
        this.lookupFilters = LOOKUP_FILTERS;
        this.dynamicSources = DYNAMIC_SOURCES;
        this.inputFormRules = FORM_RULES;
        this.systemFormRules = FORMULA_FIELDS;
        this.picklistValueSource = {
            
        };
        this.uiType = {};
        this.parentRecordApi="";
        
    }


    @api
    get recordId() {
        return this._recordId;
    }
    set recordId(value) {
        this._recordId = value;
        this.parentId = value;
    }

    // getters for field value, display value and field metadata
    
    get v_NAME() {
        return this.getValueFor(FIELD_NAME.fieldApiName);
    }
    get f_NAME() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_NAME.fieldApiName] : {};
        return val;
    }

    get d_NAME() {
        return lookupDisplayFields[FIELD_NAME.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_NAME.fieldApiName].fieldApiName);
    }

    
    get v_OWNERID() {
        return this.getValueFor(FIELD_OWNERID.fieldApiName);
    }
    get f_OWNERID() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_OWNERID.fieldApiName] : {};
        return val;
    }

    get d_OWNERID() {
        return lookupDisplayFields[FIELD_OWNERID.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_OWNERID.fieldApiName].fieldApiName);
    }

    
    get v_START_DATE_TIME__C() {
        return this.getValueFor(FIELD_START_DATE_TIME__C.fieldApiName);
    }
    get f_START_DATE_TIME__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_START_DATE_TIME__C.fieldApiName] : {};
        return val;
    }

    get d_START_DATE_TIME__C() {
        return lookupDisplayFields[FIELD_START_DATE_TIME__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_START_DATE_TIME__C.fieldApiName].fieldApiName);
    }

    
    get v_ACTIVE__C() {
        return this.getValueFor(FIELD_ACTIVE__C.fieldApiName);
    }
    get f_ACTIVE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_ACTIVE__C.fieldApiName] : {};
        return val;
    }

    get d_ACTIVE__C() {
        return lookupDisplayFields[FIELD_ACTIVE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_ACTIVE__C.fieldApiName].fieldApiName);
    }

    
    get v_EMAIL__C() {
        return this.getValueFor(FIELD_EMAIL__C.fieldApiName);
    }
    get f_EMAIL__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_EMAIL__C.fieldApiName] : {};
        return val;
    }

    get d_EMAIL__C() {
        return lookupDisplayFields[FIELD_EMAIL__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_EMAIL__C.fieldApiName].fieldApiName);
    }

    
    get v_TYPE__C() {
        return this.getValueFor(FIELD_TYPE__C.fieldApiName);
    }
    get f_TYPE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_TYPE__C.fieldApiName] : {};
        return val;
    }

    get d_TYPE__C() {
        return lookupDisplayFields[FIELD_TYPE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_TYPE__C.fieldApiName].fieldApiName);
    }

    
    get v_COMMENTS__C() {
        return this.getValueFor(FIELD_COMMENTS__C.fieldApiName);
    }
    get f_COMMENTS__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMMENTS__C.fieldApiName] : {};
        return val;
    }

    get d_COMMENTS__C() {
        return lookupDisplayFields[FIELD_COMMENTS__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMMENTS__C.fieldApiName].fieldApiName);
    }

    
    get v_CREATEDBYID() {
        return this.getValueFor(FIELD_CREATEDBYID.fieldApiName);
    }
    get f_CREATEDBYID() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_CREATEDBYID.fieldApiName] : {};
        return val;
    }

    get d_CREATEDBYID() {
        return lookupDisplayFields[FIELD_CREATEDBYID.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_CREATEDBYID.fieldApiName].fieldApiName);
    }

    
    get v_LASTMODIFIEDBYID() {
        return this.getValueFor(FIELD_LASTMODIFIEDBYID.fieldApiName);
    }
    get f_LASTMODIFIEDBYID() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_LASTMODIFIEDBYID.fieldApiName] : {};
        return val;
    }

    get d_LASTMODIFIEDBYID() {
        return lookupDisplayFields[FIELD_LASTMODIFIEDBYID.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_LASTMODIFIEDBYID.fieldApiName].fieldApiName);
    }

    


    
        
    get CQCLIENTNAME_INFORMATION() {
        return CQCLIENTNAME_INFORMATION;
    }
        
    
        
    get CQCLIENTNAME_SYSTEM_INFORMATION() {
        return CQCLIENTNAME_SYSTEM_INFORMATION;
    }
        
    
        
    get CQCLIENTNAME_CUSTOM_LINKS() {
        return CQCLIENTNAME_CUSTOM_LINKS;
    }
        
    
}