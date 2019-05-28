// let express = require('express'),
//   bodyParser = require('body-parser'),
//   port = process.env.PORT || 3000,
//   app = express();
// let alexaVerifier = require('alexa-verifier');
// var isFisrtTime = true;
// const SKILL_NAME = 'Disney Heroes';
//
// app.use(bodyParser.json({
//   verify: function getRawBody(req, res, buf) {
//     req.rawBody = buf.toString();
//   }
// }));
//
// function log() {
//   if (true) {
//     console.log.apply(console, arguments);
//   }
// }
//
// //for check api run or not.
// app.get('/', function (req, res) {
//   res.send('hello world')
// })
//
//
// app.listen(port);
//
// console.log('Alexa list RESTful API server started on: ' + port);
//
//


// Lambda Function code for Alexa.
// Paste this into your index.js file.
//const Alexa = require('ask-sdk-core');
const Alexa = require("ask-sdk");
const https = require("https");
let express = require('express'),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 3000,
  app = express();
let alexaVerifier = require('alexa-verifier');


// lol

const invocationName = "test tia";

// Session Attributes
//   Alexa will track attributes for you, by default only during the lifespan of your session.
//   The history[] array will track previous request(s), used for contextual Help/Yes/No handling.
//   Set up DynamoDB persistence to have the skill save and reload these attributes between skill sessions.


function getMemoryAttributes() {   const memoryAttributes = {
       "history":[],

        // The remaining attributes will be useful after DynamoDB persistence is configured
       "launchCount":0,
       "lastUseTimestamp":0,

       "lastSpeechOutput":{},
       "nextIntent":[]

       // "favoriteColor":"",
       // "name":"",
       // "namePronounce":"",
       // "email":"",
       // "mobileNumber":"",
       // "city":"",
       // "state":"",
       // "postcode":"",
       // "birthday":"",
       // "bookmark":0,
       // "wishlist":[],
   };
   return memoryAttributes;
};

const maxHistorySize = 20; // remember only latest 20 intents


// 1. Intent Handlers =============================================


// app.post('/Client_rfq_Handler', function(req, res) {
//
//             console.log("yeah u in client req");
//             if (req.body.request.type === 'LaunchRequest' && request.intent.name === 'Client_rfq') {
//             const speechText = 'Welcome to Fero.ai. What would you like to know about fero.ai?';
//             isFisrtTime = false
//             }
//
//           return(speechText, false)
// });

const Client_rfq_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Client_rfq' ;
    },
    handle(handlerInput) {
    //    const request = handlerInput.requestEnvelope.request;
    //    const responseBuilder = handlerInput.responseBuilder;
    //    let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        const speechText = 'Welcome to Fero.ai. What would you like to know about fero.ai?';

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    },
};


const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speechText = 'Hello Welcoem to fero.ai!';
return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard('Hello World', speechText)
            .getResponse();
    }
};






//for check api run or not.
app.get('/', function (req, res) {
  res.send('hello world')
})

const Rateinquire_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Rateinquire' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Rateinquire. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};


const Client_password_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Client_password' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Client_password. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Client_gnrl_clearance_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Client_gnrl_clearance' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Client_gnrl_clearance. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const TiaJoke_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'TiaJoke' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from TiaJoke. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Explore_marketpresence_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Explore_marketpresence' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Explore_marketpresence. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Knowaboutus_operationTia_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Knowaboutus_operationTia' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Knowaboutus_operationTia. ';

        let slotStatus = '';
        let resolvedSlot;

        let slotValues = getSlotValues(request.intent.slots);
        // getSlotValues returns .heardAs, .resolved, and .isValidated for each slot, according to request slot status codes ER_SUCCESS_MATCH, ER_SUCCESS_NO_MATCH, or traditional simple request slot without resolutions

        // console.log('***** slotValues: ' +  JSON.stringify(slotValues, null, 2));
        //   SLOT: tiaslot
        if (slotValues.tiaslot.heardAs) {
            slotStatus += ' slot tiaslot was heard as ' + slotValues.tiaslot.heardAs + '. ';
        } else {
            slotStatus += 'slot tiaslot is empty. ';
        }
        if (slotValues.tiaslot.ERstatus === 'ER_SUCCESS_MATCH') {
            slotStatus += 'a valid ';
            if(slotValues.tiaslot.resolved !== slotValues.tiaslot.heardAs) {
                slotStatus += 'synonym for ' + slotValues.tiaslot.resolved + '. ';
                } else {
                slotStatus += 'match. '
            } // else {
                //
        }
        if (slotValues.tiaslot.ERstatus === 'ER_SUCCESS_NO_MATCH') {
            slotStatus += 'which did not match any slot value. ';
            console.log('***** consider adding "' + slotValues.tiaslot.heardAs + '" to the custom slot type used by slot tiaslot! ');
        }

        if( (slotValues.tiaslot.ERstatus === 'ER_SUCCESS_NO_MATCH') ||  (!slotValues.tiaslot.heardAs) ) {
            slotStatus += 'A few valid values are, ' + sayArray(getExampleSlotValues('Knowaboutus_operationTia','tiaslot'), 'or');
        }

        say += slotStatus;


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const ClientRegister_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'ClientRegister' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from ClientRegister. ';

        let slotStatus = '';
        let resolvedSlot;

        let slotValues = getSlotValues(request.intent.slots);
        // getSlotValues returns .heardAs, .resolved, and .isValidated for each slot, according to request slot status codes ER_SUCCESS_MATCH, ER_SUCCESS_NO_MATCH, or traditional simple request slot without resolutions

        // console.log('***** slotValues: ' +  JSON.stringify(slotValues, null, 2));
        //   SLOT: typesslot
        if (slotValues.typesslot.heardAs) {
            slotStatus += ' slot typesslot was heard as ' + slotValues.typesslot.heardAs + '. ';
        } else {
            slotStatus += 'slot typesslot is empty. ';
        }
        if (slotValues.typesslot.ERstatus === 'ER_SUCCESS_MATCH') {
            slotStatus += 'a valid ';
            if(slotValues.typesslot.resolved !== slotValues.typesslot.heardAs) {
                slotStatus += 'synonym for ' + slotValues.typesslot.resolved + '. ';
                } else {
                slotStatus += 'match. '
            } // else {
                //
        }
        if (slotValues.typesslot.ERstatus === 'ER_SUCCESS_NO_MATCH') {
            slotStatus += 'which did not match any slot value. ';
            console.log('***** consider adding "' + slotValues.typesslot.heardAs + '" to the custom slot type used by slot typesslot! ');
        }

        if( (slotValues.typesslot.ERstatus === 'ER_SUCCESS_NO_MATCH') ||  (!slotValues.typesslot.heardAs) ) {
            slotStatus += 'A few valid values are, ' + sayArray(getExampleSlotValues('ClientRegister','typesslot'), 'or');
        }

        say += slotStatus;


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Transporter_gnrl_cancellation_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Transporter_gnrl_cancellation' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Transporter_gnrl_cancellation. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Knowaboutus_contactDetails_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Knowaboutus_contactDetails' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Knowaboutus_contactDetails. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Transporter_gnrl_shipment_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Transporter_gnrl_shipment' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Transporter_gnrl_shipment. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Transporter_sim_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Transporter_sim' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Transporter_sim. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Client_blockchain_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Client_blockchain' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Client_blockchain. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Explore_borderClearance_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Explore_borderClearance' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Explore_borderClearance. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Client_gnrl_cargo_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Client_gnrl_cargo' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Client_gnrl_cargo. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Client_gnrl_helpers_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Client_gnrl_helpers' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Client_gnrl_helpers. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Client_multiuser_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Client_multiuser' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Client_multiuser. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Otp_def_client_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Otp_def_client' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Otp_def_client. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Transporter_logbot_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Transporter_logbot' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Transporter_logbot. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const TransporterRegister_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'TransporterRegister' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from TransporterRegister. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Orderinquire_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Orderinquire' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Orderinquire. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Client_panel_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Client_panel' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Client_panel. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Knowaboutus_teamTechnologyUsed_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Knowaboutus_teamTechnologyUsed' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Knowaboutus_teamTechnologyUsed. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Knowaboutus_operation_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Knowaboutus_operation' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Knowaboutus_operation. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Transporter_gnrl_clearance_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Transporter_gnrl_clearance' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Transporter_gnrl_clearance. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Client_contracts_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Client_contracts' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Client_contracts. ';

        let slotStatus = '';
        let resolvedSlot;

        let slotValues = getSlotValues(request.intent.slots);
        // getSlotValues returns .heardAs, .resolved, and .isValidated for each slot, according to request slot status codes ER_SUCCESS_MATCH, ER_SUCCESS_NO_MATCH, or traditional simple request slot without resolutions

        // console.log('***** slotValues: ' +  JSON.stringify(slotValues, null, 2));
        //   SLOT: contractslot
        if (slotValues.contractslot.heardAs) {
            slotStatus += ' slot contractslot was heard as ' + slotValues.contractslot.heardAs + '. ';
        } else {
            slotStatus += 'slot contractslot is empty. ';
        }
        if (slotValues.contractslot.ERstatus === 'ER_SUCCESS_MATCH') {
            slotStatus += 'a valid ';
            if(slotValues.contractslot.resolved !== slotValues.contractslot.heardAs) {
                slotStatus += 'synonym for ' + slotValues.contractslot.resolved + '. ';
                } else {
                slotStatus += 'match. '
            } // else {
                //
        }
        if (slotValues.contractslot.ERstatus === 'ER_SUCCESS_NO_MATCH') {
            slotStatus += 'which did not match any slot value. ';
            console.log('***** consider adding "' + slotValues.contractslot.heardAs + '" to the custom slot type used by slot contractslot! ');
        }

        if( (slotValues.contractslot.ERstatus === 'ER_SUCCESS_NO_MATCH') ||  (!slotValues.contractslot.heardAs) ) {
            slotStatus += 'A few valid values are, ' + sayArray(getExampleSlotValues('Client_contracts','contractslot'), 'or');
        }

        say += slotStatus;


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Login_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Login' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Login. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Wanttobid_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Wanttobid' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Wanttobid. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Regsitergen_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Regsitergen' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Regsitergen. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Bid_def_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Bid_def' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Bid_def. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Knowaboutus_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Knowaboutus' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Knowaboutus. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const TiaCreator_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'TiaCreator' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from TiaCreator. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Transporter_track_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Transporter_track' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Transporter_track. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Newuser_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Newuser' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Newuser. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Knowaboutus_contactDetailsContactInfo_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Knowaboutus_contactDetailsContactInfo' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Knowaboutus_contactDetailsContactInfo. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Client_gnrl_fleet_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Client_gnrl_fleet' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Client_gnrl_fleet. ';

        let slotStatus = '';
        let resolvedSlot;

        let slotValues = getSlotValues(request.intent.slots);
        // getSlotValues returns .heardAs, .resolved, and .isValidated for each slot, according to request slot status codes ER_SUCCESS_MATCH, ER_SUCCESS_NO_MATCH, or traditional simple request slot without resolutions

        // console.log('***** slotValues: ' +  JSON.stringify(slotValues, null, 2));
        //   SLOT: fleetslot
        if (slotValues.fleetslot.heardAs) {
            slotStatus += ' slot fleetslot was heard as ' + slotValues.fleetslot.heardAs + '. ';
        } else {
            slotStatus += 'slot fleetslot is empty. ';
        }
        if (slotValues.fleetslot.ERstatus === 'ER_SUCCESS_MATCH') {
            slotStatus += 'a valid ';
            if(slotValues.fleetslot.resolved !== slotValues.fleetslot.heardAs) {
                slotStatus += 'synonym for ' + slotValues.fleetslot.resolved + '. ';
                } else {
                slotStatus += 'match. '
            } // else {
                //
        }
        if (slotValues.fleetslot.ERstatus === 'ER_SUCCESS_NO_MATCH') {
            slotStatus += 'which did not match any slot value. ';
            console.log('***** consider adding "' + slotValues.fleetslot.heardAs + '" to the custom slot type used by slot fleetslot! ');
        }

        if( (slotValues.fleetslot.ERstatus === 'ER_SUCCESS_NO_MATCH') ||  (!slotValues.fleetslot.heardAs) ) {
            slotStatus += 'A few valid values are, ' + sayArray(getExampleSlotValues('Client_gnrl_fleet','fleetslot'), 'or');
        }

        say += slotStatus;


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Explore_tia_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Explore_tia' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Explore_tia. ';

        let slotStatus = '';
        let resolvedSlot;

        let slotValues = getSlotValues(request.intent.slots);
        // getSlotValues returns .heardAs, .resolved, and .isValidated for each slot, according to request slot status codes ER_SUCCESS_MATCH, ER_SUCCESS_NO_MATCH, or traditional simple request slot without resolutions

        // console.log('***** slotValues: ' +  JSON.stringify(slotValues, null, 2));
        //   SLOT: tiaslot
        if (slotValues.tiaslot.heardAs) {
            slotStatus += ' slot tiaslot was heard as ' + slotValues.tiaslot.heardAs + '. ';
        } else {
            slotStatus += 'slot tiaslot is empty. ';
        }
        if (slotValues.tiaslot.ERstatus === 'ER_SUCCESS_MATCH') {
            slotStatus += 'a valid ';
            if(slotValues.tiaslot.resolved !== slotValues.tiaslot.heardAs) {
                slotStatus += 'synonym for ' + slotValues.tiaslot.resolved + '. ';
                } else {
                slotStatus += 'match. '
            } // else {
                //
        }
        if (slotValues.tiaslot.ERstatus === 'ER_SUCCESS_NO_MATCH') {
            slotStatus += 'which did not match any slot value. ';
            console.log('***** consider adding "' + slotValues.tiaslot.heardAs + '" to the custom slot type used by slot tiaslot! ');
        }

        if( (slotValues.tiaslot.ERstatus === 'ER_SUCCESS_NO_MATCH') ||  (!slotValues.tiaslot.heardAs) ) {
            slotStatus += 'A few valid values are, ' + sayArray(getExampleSlotValues('Explore_tia','tiaslot'), 'or');
        }

        say += slotStatus;


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Transporter_gnrl_helpers_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Transporter_gnrl_helpers' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Transporter_gnrl_helpers. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Knowaboutus_operationTruckCount_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Knowaboutus_operationTruckCount' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Knowaboutus_operationTruckCount. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Types_shipper_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Types_shipper' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Types_shipper. ';

        let slotStatus = '';
        let resolvedSlot;

        let slotValues = getSlotValues(request.intent.slots);
        // getSlotValues returns .heardAs, .resolved, and .isValidated for each slot, according to request slot status codes ER_SUCCESS_MATCH, ER_SUCCESS_NO_MATCH, or traditional simple request slot without resolutions

        // console.log('***** slotValues: ' +  JSON.stringify(slotValues, null, 2));
        //   SLOT: typesslot
        if (slotValues.typesslot.heardAs) {
            slotStatus += ' slot typesslot was heard as ' + slotValues.typesslot.heardAs + '. ';
        } else {
            slotStatus += 'slot typesslot is empty. ';
        }
        if (slotValues.typesslot.ERstatus === 'ER_SUCCESS_MATCH') {
            slotStatus += 'a valid ';
            if(slotValues.typesslot.resolved !== slotValues.typesslot.heardAs) {
                slotStatus += 'synonym for ' + slotValues.typesslot.resolved + '. ';
                } else {
                slotStatus += 'match. '
            } // else {
                //
        }
        if (slotValues.typesslot.ERstatus === 'ER_SUCCESS_NO_MATCH') {
            slotStatus += 'which did not match any slot value. ';
            console.log('***** consider adding "' + slotValues.typesslot.heardAs + '" to the custom slot type used by slot typesslot! ');
        }

        if( (slotValues.typesslot.ERstatus === 'ER_SUCCESS_NO_MATCH') ||  (!slotValues.typesslot.heardAs) ) {
            slotStatus += 'A few valid values are, ' + sayArray(getExampleSlotValues('Types_shipper','typesslot'), 'or');
        }

        say += slotStatus;


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Explore_fleet_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Explore_fleet' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Explore_fleet. ';

        let slotStatus = '';
        let resolvedSlot;

        let slotValues = getSlotValues(request.intent.slots);
        // getSlotValues returns .heardAs, .resolved, and .isValidated for each slot, according to request slot status codes ER_SUCCESS_MATCH, ER_SUCCESS_NO_MATCH, or traditional simple request slot without resolutions

        // console.log('***** slotValues: ' +  JSON.stringify(slotValues, null, 2));
        //   SLOT: fleetslot
        if (slotValues.fleetslot.heardAs) {
            slotStatus += ' slot fleetslot was heard as ' + slotValues.fleetslot.heardAs + '. ';
        } else {
            slotStatus += 'slot fleetslot is empty. ';
        }
        if (slotValues.fleetslot.ERstatus === 'ER_SUCCESS_MATCH') {
            slotStatus += 'a valid ';
            if(slotValues.fleetslot.resolved !== slotValues.fleetslot.heardAs) {
                slotStatus += 'synonym for ' + slotValues.fleetslot.resolved + '. ';
                } else {
                slotStatus += 'match. '
            } // else {
                //
        }
        if (slotValues.fleetslot.ERstatus === 'ER_SUCCESS_NO_MATCH') {
            slotStatus += 'which did not match any slot value. ';
            console.log('***** consider adding "' + slotValues.fleetslot.heardAs + '" to the custom slot type used by slot fleetslot! ');
        }

        if( (slotValues.fleetslot.ERstatus === 'ER_SUCCESS_NO_MATCH') ||  (!slotValues.fleetslot.heardAs) ) {
            slotStatus += 'A few valid values are, ' + sayArray(getExampleSlotValues('Explore_fleet','fleetslot'), 'or');
        }

        say += slotStatus;


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Types_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Types' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Types. ';

        let slotStatus = '';
        let resolvedSlot;

        let slotValues = getSlotValues(request.intent.slots);
        // getSlotValues returns .heardAs, .resolved, and .isValidated for each slot, according to request slot status codes ER_SUCCESS_MATCH, ER_SUCCESS_NO_MATCH, or traditional simple request slot without resolutions

        // console.log('***** slotValues: ' +  JSON.stringify(slotValues, null, 2));
        //   SLOT: typesslot
        if (slotValues.typesslot.heardAs) {
            slotStatus += ' slot typesslot was heard as ' + slotValues.typesslot.heardAs + '. ';
        } else {
            slotStatus += 'slot typesslot is empty. ';
        }
        if (slotValues.typesslot.ERstatus === 'ER_SUCCESS_MATCH') {
            slotStatus += 'a valid ';
            if(slotValues.typesslot.resolved !== slotValues.typesslot.heardAs) {
                slotStatus += 'synonym for ' + slotValues.typesslot.resolved + '. ';
                } else {
                slotStatus += 'match. '
            } // else {
                //
        }
        if (slotValues.typesslot.ERstatus === 'ER_SUCCESS_NO_MATCH') {
            slotStatus += 'which did not match any slot value. ';
            console.log('***** consider adding "' + slotValues.typesslot.heardAs + '" to the custom slot type used by slot typesslot! ');
        }

        if( (slotValues.typesslot.ERstatus === 'ER_SUCCESS_NO_MATCH') ||  (!slotValues.typesslot.heardAs) ) {
            slotStatus += 'A few valid values are, ' + sayArray(getExampleSlotValues('Types','typesslot'), 'or');
        }

        say += slotStatus;


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const OtherCustom_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'OtherCustom' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from OtherCustom. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Knowaboutus_team_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Knowaboutus_team' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Knowaboutus_team. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Other_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Other' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Other. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Type_transporter_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Type_transporter' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Type_transporter. ';

        let slotStatus = '';
        let resolvedSlot;

        let slotValues = getSlotValues(request.intent.slots);
        // getSlotValues returns .heardAs, .resolved, and .isValidated for each slot, according to request slot status codes ER_SUCCESS_MATCH, ER_SUCCESS_NO_MATCH, or traditional simple request slot without resolutions

        // console.log('***** slotValues: ' +  JSON.stringify(slotValues, null, 2));
        //   SLOT: typesslot
        if (slotValues.typesslot.heardAs) {
            slotStatus += ' slot typesslot was heard as ' + slotValues.typesslot.heardAs + '. ';
        } else {
            slotStatus += 'slot typesslot is empty. ';
        }
        if (slotValues.typesslot.ERstatus === 'ER_SUCCESS_MATCH') {
            slotStatus += 'a valid ';
            if(slotValues.typesslot.resolved !== slotValues.typesslot.heardAs) {
                slotStatus += 'synonym for ' + slotValues.typesslot.resolved + '. ';
                } else {
                slotStatus += 'match. '
            } // else {
                //
        }
        if (slotValues.typesslot.ERstatus === 'ER_SUCCESS_NO_MATCH') {
            slotStatus += 'which did not match any slot value. ';
            console.log('***** consider adding "' + slotValues.typesslot.heardAs + '" to the custom slot type used by slot typesslot! ');
        }

        if( (slotValues.typesslot.ERstatus === 'ER_SUCCESS_NO_MATCH') ||  (!slotValues.typesslot.heardAs) ) {
            slotStatus += 'A few valid values are, ' + sayArray(getExampleSlotValues('Type_transporter','typesslot'), 'or');
        }

        say += slotStatus;


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const TransporterWantsToBid_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'TransporterWantsToBid' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from TransporterWantsToBid. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Other_options_transporter_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Other_options_transporter' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Other_options_transporter. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Trans_fleet_types_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Trans_fleet_types' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Trans_fleet_types. ';

        let slotStatus = '';
        let resolvedSlot;

        let slotValues = getSlotValues(request.intent.slots);
        // getSlotValues returns .heardAs, .resolved, and .isValidated for each slot, according to request slot status codes ER_SUCCESS_MATCH, ER_SUCCESS_NO_MATCH, or traditional simple request slot without resolutions

        // console.log('***** slotValues: ' +  JSON.stringify(slotValues, null, 2));
        //   SLOT: fleet_typeslot
        if (slotValues.fleet_typeslot.heardAs) {
            slotStatus += ' slot fleet_typeslot was heard as ' + slotValues.fleet_typeslot.heardAs + '. ';
        } else {
            slotStatus += 'slot fleet_typeslot is empty. ';
        }
        if (slotValues.fleet_typeslot.ERstatus === 'ER_SUCCESS_MATCH') {
            slotStatus += 'a valid ';
            if(slotValues.fleet_typeslot.resolved !== slotValues.fleet_typeslot.heardAs) {
                slotStatus += 'synonym for ' + slotValues.fleet_typeslot.resolved + '. ';
                } else {
                slotStatus += 'match. '
            } // else {
                //
        }
        if (slotValues.fleet_typeslot.ERstatus === 'ER_SUCCESS_NO_MATCH') {
            slotStatus += 'which did not match any slot value. ';
            console.log('***** consider adding "' + slotValues.fleet_typeslot.heardAs + '" to the custom slot type used by slot fleet_typeslot! ');
        }

        if( (slotValues.fleet_typeslot.ERstatus === 'ER_SUCCESS_NO_MATCH') ||  (!slotValues.fleet_typeslot.heardAs) ) {
            slotStatus += 'A few valid values are, ' + sayArray(getExampleSlotValues('Trans_fleet_types','fleet_typeslot'), 'or');
        }

        say += slotStatus;


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Transporter_detention_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Transporter_detention' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Transporter_detention. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Transporter_gnrl_fleet_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Transporter_gnrl_fleet' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Transporter_gnrl_fleet. ';

        let slotStatus = '';
        let resolvedSlot;

        let slotValues = getSlotValues(request.intent.slots);
        // getSlotValues returns .heardAs, .resolved, and .isValidated for each slot, according to request slot status codes ER_SUCCESS_MATCH, ER_SUCCESS_NO_MATCH, or traditional simple request slot without resolutions

        // console.log('***** slotValues: ' +  JSON.stringify(slotValues, null, 2));
        //   SLOT: fleetslot
        if (slotValues.fleetslot.heardAs) {
            slotStatus += ' slot fleetslot was heard as ' + slotValues.fleetslot.heardAs + '. ';
        } else {
            slotStatus += 'slot fleetslot is empty. ';
        }
        if (slotValues.fleetslot.ERstatus === 'ER_SUCCESS_MATCH') {
            slotStatus += 'a valid ';
            if(slotValues.fleetslot.resolved !== slotValues.fleetslot.heardAs) {
                slotStatus += 'synonym for ' + slotValues.fleetslot.resolved + '. ';
                } else {
                slotStatus += 'match. '
            } // else {
                //
        }
        if (slotValues.fleetslot.ERstatus === 'ER_SUCCESS_NO_MATCH') {
            slotStatus += 'which did not match any slot value. ';
            console.log('***** consider adding "' + slotValues.fleetslot.heardAs + '" to the custom slot type used by slot fleetslot! ');
        }

        if( (slotValues.fleetslot.ERstatus === 'ER_SUCCESS_NO_MATCH') ||  (!slotValues.fleetslot.heardAs) ) {
            slotStatus += 'A few valid values are, ' + sayArray(getExampleSlotValues('Transporter_gnrl_fleet','fleetslot'), 'or');
        }

        say += slotStatus;


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Knowaboutus_technologyBot_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Knowaboutus_technologyBot' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Knowaboutus_technologyBot. ';

        let slotStatus = '';
        let resolvedSlot;

        let slotValues = getSlotValues(request.intent.slots);
        // getSlotValues returns .heardAs, .resolved, and .isValidated for each slot, according to request slot status codes ER_SUCCESS_MATCH, ER_SUCCESS_NO_MATCH, or traditional simple request slot without resolutions

        // console.log('***** slotValues: ' +  JSON.stringify(slotValues, null, 2));
        //   SLOT: tiaslot
        if (slotValues.tiaslot.heardAs) {
            slotStatus += ' slot tiaslot was heard as ' + slotValues.tiaslot.heardAs + '. ';
        } else {
            slotStatus += 'slot tiaslot is empty. ';
        }
        if (slotValues.tiaslot.ERstatus === 'ER_SUCCESS_MATCH') {
            slotStatus += 'a valid ';
            if(slotValues.tiaslot.resolved !== slotValues.tiaslot.heardAs) {
                slotStatus += 'synonym for ' + slotValues.tiaslot.resolved + '. ';
                } else {
                slotStatus += 'match. '
            } // else {
                //
        }
        if (slotValues.tiaslot.ERstatus === 'ER_SUCCESS_NO_MATCH') {
            slotStatus += 'which did not match any slot value. ';
            console.log('***** consider adding "' + slotValues.tiaslot.heardAs + '" to the custom slot type used by slot tiaslot! ');
        }

        if( (slotValues.tiaslot.ERstatus === 'ER_SUCCESS_NO_MATCH') ||  (!slotValues.tiaslot.heardAs) ) {
            slotStatus += 'A few valid values are, ' + sayArray(getExampleSlotValues('Knowaboutus_technologyBot','tiaslot'), 'or');
        }

        say += slotStatus;


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Knowaboutus_teamTia_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Knowaboutus_teamTia' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Knowaboutus_teamTia. ';

        let slotStatus = '';
        let resolvedSlot;

        let slotValues = getSlotValues(request.intent.slots);
        // getSlotValues returns .heardAs, .resolved, and .isValidated for each slot, according to request slot status codes ER_SUCCESS_MATCH, ER_SUCCESS_NO_MATCH, or traditional simple request slot without resolutions

        // console.log('***** slotValues: ' +  JSON.stringify(slotValues, null, 2));
        //   SLOT: tiaslot
        if (slotValues.tiaslot.heardAs) {
            slotStatus += ' slot tiaslot was heard as ' + slotValues.tiaslot.heardAs + '. ';
        } else {
            slotStatus += 'slot tiaslot is empty. ';
        }
        if (slotValues.tiaslot.ERstatus === 'ER_SUCCESS_MATCH') {
            slotStatus += 'a valid ';
            if(slotValues.tiaslot.resolved !== slotValues.tiaslot.heardAs) {
                slotStatus += 'synonym for ' + slotValues.tiaslot.resolved + '. ';
                } else {
                slotStatus += 'match. '
            } // else {
                //
        }
        if (slotValues.tiaslot.ERstatus === 'ER_SUCCESS_NO_MATCH') {
            slotStatus += 'which did not match any slot value. ';
            console.log('***** consider adding "' + slotValues.tiaslot.heardAs + '" to the custom slot type used by slot tiaslot! ');
        }

        if( (slotValues.tiaslot.ERstatus === 'ER_SUCCESS_NO_MATCH') ||  (!slotValues.tiaslot.heardAs) ) {
            slotStatus += 'A few valid values are, ' + sayArray(getExampleSlotValues('Knowaboutus_teamTia','tiaslot'), 'or');
        }

        say += slotStatus;


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Knowaboutus_operationOwnfleet_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Knowaboutus_operationOwnfleet' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Knowaboutus_operationOwnfleet. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Explore_aboutFeroaiOperations_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Explore_aboutFeroaiOperations' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Explore_aboutFeroaiOperations. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Client_gnrl_cancellationYes_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Client_gnrl_cancellationYes' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Client_gnrl_cancellationYes. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Client_otp_rates_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Client_otp_rates' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Client_otp_rates. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Client_trux_pay_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Client_trux_pay' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Client_trux_pay. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Explore_functionalTruckCount_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Explore_functionalTruckCount' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Explore_functionalTruckCount. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const TiaBorn_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'TiaBorn' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from TiaBorn. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Knowaboutus_technologyRealTimeTracking_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Knowaboutus_technologyRealTimeTracking' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Knowaboutus_technologyRealTimeTracking. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Pod_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Pod' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Pod. ';

        let slotStatus = '';
        let resolvedSlot;

        let slotValues = getSlotValues(request.intent.slots);
        // getSlotValues returns .heardAs, .resolved, and .isValidated for each slot, according to request slot status codes ER_SUCCESS_MATCH, ER_SUCCESS_NO_MATCH, or traditional simple request slot without resolutions

        // console.log('***** slotValues: ' +  JSON.stringify(slotValues, null, 2));
        //   SLOT: othersslot
        if (slotValues.othersslot.heardAs) {
            slotStatus += ' slot othersslot was heard as ' + slotValues.othersslot.heardAs + '. ';
        } else {
            slotStatus += 'slot othersslot is empty. ';
        }
        if (slotValues.othersslot.ERstatus === 'ER_SUCCESS_MATCH') {
            slotStatus += 'a valid ';
            if(slotValues.othersslot.resolved !== slotValues.othersslot.heardAs) {
                slotStatus += 'synonym for ' + slotValues.othersslot.resolved + '. ';
                } else {
                slotStatus += 'match. '
            } // else {
                //
        }
        if (slotValues.othersslot.ERstatus === 'ER_SUCCESS_NO_MATCH') {
            slotStatus += 'which did not match any slot value. ';
            console.log('***** consider adding "' + slotValues.othersslot.heardAs + '" to the custom slot type used by slot othersslot! ');
        }

        if( (slotValues.othersslot.ERstatus === 'ER_SUCCESS_NO_MATCH') ||  (!slotValues.othersslot.heardAs) ) {
            slotStatus += 'A few valid values are, ' + sayArray(getExampleSlotValues('Pod','othersslot'), 'or');
        }

        say += slotStatus;


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Transporter_truxhistory_gnrl_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Transporter_truxhistory_gnrl' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Transporter_truxhistory_gnrl. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Creatortrux_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Creatortrux' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Creatortrux. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Transporter_gnrl_detention_charges_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Transporter_gnrl_detention_charges' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Transporter_gnrl_detention_charges. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Feroseawelcome_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Feroseawelcome' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Feroseawelcome. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Explore_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Explore' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Explore. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const DefaultWelcomeintent_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'DefaultWelcomeintent' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from DefaultWelcomeintent. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Somethingelse_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Somethingelse' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Somethingelse. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Client_order_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Client_order' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Client_order. ';

        let slotStatus = '';
        let resolvedSlot;

        let slotValues = getSlotValues(request.intent.slots);
        // getSlotValues returns .heardAs, .resolved, and .isValidated for each slot, according to request slot status codes ER_SUCCESS_MATCH, ER_SUCCESS_NO_MATCH, or traditional simple request slot without resolutions

        // console.log('***** slotValues: ' +  JSON.stringify(slotValues, null, 2));
        //   SLOT: fleetslot
        if (slotValues.fleetslot.heardAs) {
            slotStatus += ' slot fleetslot was heard as ' + slotValues.fleetslot.heardAs + '. ';
        } else {
            slotStatus += 'slot fleetslot is empty. ';
        }
        if (slotValues.fleetslot.ERstatus === 'ER_SUCCESS_MATCH') {
            slotStatus += 'a valid ';
            if(slotValues.fleetslot.resolved !== slotValues.fleetslot.heardAs) {
                slotStatus += 'synonym for ' + slotValues.fleetslot.resolved + '. ';
                } else {
                slotStatus += 'match. '
            } // else {
                //
        }
        if (slotValues.fleetslot.ERstatus === 'ER_SUCCESS_NO_MATCH') {
            slotStatus += 'which did not match any slot value. ';
            console.log('***** consider adding "' + slotValues.fleetslot.heardAs + '" to the custom slot type used by slot fleetslot! ');
        }

        if( (slotValues.fleetslot.ERstatus === 'ER_SUCCESS_NO_MATCH') ||  (!slotValues.fleetslot.heardAs) ) {
            slotStatus += 'A few valid values are, ' + sayArray(getExampleSlotValues('Client_order','fleetslot'), 'or');
        }

        say += slotStatus;


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Knowaboutus_technologyPredictRates_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Knowaboutus_technologyPredictRates' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Knowaboutus_technologyPredictRates. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Rate_enquiry_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Rate_enquiry' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Rate_enquiry. ';

        let slotStatus = '';
        let resolvedSlot;

        let slotValues = getSlotValues(request.intent.slots);
        // getSlotValues returns .heardAs, .resolved, and .isValidated for each slot, according to request slot status codes ER_SUCCESS_MATCH, ER_SUCCESS_NO_MATCH, or traditional simple request slot without resolutions

        // console.log('***** slotValues: ' +  JSON.stringify(slotValues, null, 2));
        //   SLOT: locationslot
        if (slotValues.locationslot.heardAs) {
            slotStatus += ' slot locationslot was heard as ' + slotValues.locationslot.heardAs + '. ';
        } else {
            slotStatus += 'slot locationslot is empty. ';
        }
        if (slotValues.locationslot.ERstatus === 'ER_SUCCESS_MATCH') {
            slotStatus += 'a valid ';
            if(slotValues.locationslot.resolved !== slotValues.locationslot.heardAs) {
                slotStatus += 'synonym for ' + slotValues.locationslot.resolved + '. ';
                } else {
                slotStatus += 'match. '
            } // else {
                //
        }
        if (slotValues.locationslot.ERstatus === 'ER_SUCCESS_NO_MATCH') {
            slotStatus += 'which did not match any slot value. ';
            console.log('***** consider adding "' + slotValues.locationslot.heardAs + '" to the custom slot type used by slot locationslot! ');
        }

        if( (slotValues.locationslot.ERstatus === 'ER_SUCCESS_NO_MATCH') ||  (!slotValues.locationslot.heardAs) ) {
            slotStatus += 'A few valid values are, ' + sayArray(getExampleSlotValues('Rate_enquiry','locationslot'), 'or');
        }

        say += slotStatus;


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Types_broker_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Types_broker' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Types_broker. ';

        let slotStatus = '';
        let resolvedSlot;

        let slotValues = getSlotValues(request.intent.slots);
        // getSlotValues returns .heardAs, .resolved, and .isValidated for each slot, according to request slot status codes ER_SUCCESS_MATCH, ER_SUCCESS_NO_MATCH, or traditional simple request slot without resolutions

        // console.log('***** slotValues: ' +  JSON.stringify(slotValues, null, 2));
        //   SLOT: typesslot
        if (slotValues.typesslot.heardAs) {
            slotStatus += ' slot typesslot was heard as ' + slotValues.typesslot.heardAs + '. ';
        } else {
            slotStatus += 'slot typesslot is empty. ';
        }
        if (slotValues.typesslot.ERstatus === 'ER_SUCCESS_MATCH') {
            slotStatus += 'a valid ';
            if(slotValues.typesslot.resolved !== slotValues.typesslot.heardAs) {
                slotStatus += 'synonym for ' + slotValues.typesslot.resolved + '. ';
                } else {
                slotStatus += 'match. '
            } // else {
                //
        }
        if (slotValues.typesslot.ERstatus === 'ER_SUCCESS_NO_MATCH') {
            slotStatus += 'which did not match any slot value. ';
            console.log('***** consider adding "' + slotValues.typesslot.heardAs + '" to the custom slot type used by slot typesslot! ');
        }

        if( (slotValues.typesslot.ERstatus === 'ER_SUCCESS_NO_MATCH') ||  (!slotValues.typesslot.heardAs) ) {
            slotStatus += 'A few valid values are, ' + sayArray(getExampleSlotValues('Types_broker','typesslot'), 'or');
        }

        say += slotStatus;


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const No_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'No' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from No. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Client_gnrl_payment_terms_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Client_gnrl_payment_terms' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Client_gnrl_payment_terms. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Client_gnrl_cancellationNo_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Client_gnrl_cancellationNo' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Client_gnrl_cancellationNo. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Transporter_password_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Transporter_password' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Transporter_password. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Client_bid_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Client_bid' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Client_bid. ';

        let slotStatus = '';
        let resolvedSlot;

        let slotValues = getSlotValues(request.intent.slots);
        // getSlotValues returns .heardAs, .resolved, and .isValidated for each slot, according to request slot status codes ER_SUCCESS_MATCH, ER_SUCCESS_NO_MATCH, or traditional simple request slot without resolutions

        // console.log('***** slotValues: ' +  JSON.stringify(slotValues, null, 2));
        //   SLOT: biddingslot
        if (slotValues.biddingslot.heardAs) {
            slotStatus += ' slot biddingslot was heard as ' + slotValues.biddingslot.heardAs + '. ';
        } else {
            slotStatus += 'slot biddingslot is empty. ';
        }
        if (slotValues.biddingslot.ERstatus === 'ER_SUCCESS_MATCH') {
            slotStatus += 'a valid ';
            if(slotValues.biddingslot.resolved !== slotValues.biddingslot.heardAs) {
                slotStatus += 'synonym for ' + slotValues.biddingslot.resolved + '. ';
                } else {
                slotStatus += 'match. '
            } // else {
                //
        }
        if (slotValues.biddingslot.ERstatus === 'ER_SUCCESS_NO_MATCH') {
            slotStatus += 'which did not match any slot value. ';
            console.log('***** consider adding "' + slotValues.biddingslot.heardAs + '" to the custom slot type used by slot biddingslot! ');
        }

        if( (slotValues.biddingslot.ERstatus === 'ER_SUCCESS_NO_MATCH') ||  (!slotValues.biddingslot.heardAs) ) {
            slotStatus += 'A few valid values are, ' + sayArray(getExampleSlotValues('Client_bid','biddingslot'), 'or');
        }

        say += slotStatus;


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Feroairwelcome_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Feroairwelcome' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Feroairwelcome. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Knowaboutus_operationMarketPresence_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Knowaboutus_operationMarketPresence' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Knowaboutus_operationMarketPresence. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Transporter_tia_cordinate_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Transporter_tia_cordinate' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Transporter_tia_cordinate. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Client_gnrl_shipment_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Client_gnrl_shipment' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Client_gnrl_shipment. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const TiaPhysical_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'TiaPhysical' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from TiaPhysical. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Transporter_contract_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Transporter_contract' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Transporter_contract. ';

        let slotStatus = '';
        let resolvedSlot;

        let slotValues = getSlotValues(request.intent.slots);
        // getSlotValues returns .heardAs, .resolved, and .isValidated for each slot, according to request slot status codes ER_SUCCESS_MATCH, ER_SUCCESS_NO_MATCH, or traditional simple request slot without resolutions

        // console.log('***** slotValues: ' +  JSON.stringify(slotValues, null, 2));
        //   SLOT: contractslot
        if (slotValues.contractslot.heardAs) {
            slotStatus += ' slot contractslot was heard as ' + slotValues.contractslot.heardAs + '. ';
        } else {
            slotStatus += 'slot contractslot is empty. ';
        }
        if (slotValues.contractslot.ERstatus === 'ER_SUCCESS_MATCH') {
            slotStatus += 'a valid ';
            if(slotValues.contractslot.resolved !== slotValues.contractslot.heardAs) {
                slotStatus += 'synonym for ' + slotValues.contractslot.resolved + '. ';
                } else {
                slotStatus += 'match. '
            } // else {
                //
        }
        if (slotValues.contractslot.ERstatus === 'ER_SUCCESS_NO_MATCH') {
            slotStatus += 'which did not match any slot value. ';
            console.log('***** consider adding "' + slotValues.contractslot.heardAs + '" to the custom slot type used by slot contractslot! ');
        }

        if( (slotValues.contractslot.ERstatus === 'ER_SUCCESS_NO_MATCH') ||  (!slotValues.contractslot.heardAs) ) {
            slotStatus += 'A few valid values are, ' + sayArray(getExampleSlotValues('Transporter_contract','contractslot'), 'or');
        }

        say += slotStatus;


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Reset_password_link_client_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Reset_password_link_client' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Reset_password_link_client. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Order_inquiry_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Order_inquiry' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Order_inquiry. ';

        let slotStatus = '';
        let resolvedSlot;

        let slotValues = getSlotValues(request.intent.slots);
        // getSlotValues returns .heardAs, .resolved, and .isValidated for each slot, according to request slot status codes ER_SUCCESS_MATCH, ER_SUCCESS_NO_MATCH, or traditional simple request slot without resolutions

        // console.log('***** slotValues: ' +  JSON.stringify(slotValues, null, 2));
        //   SLOT: orderidslot
        if (slotValues.orderidslot.heardAs) {
            slotStatus += ' slot orderidslot was heard as ' + slotValues.orderidslot.heardAs + '. ';
        } else {
            slotStatus += 'slot orderidslot is empty. ';
        }
        if (slotValues.orderidslot.ERstatus === 'ER_SUCCESS_MATCH') {
            slotStatus += 'a valid ';
            if(slotValues.orderidslot.resolved !== slotValues.orderidslot.heardAs) {
                slotStatus += 'synonym for ' + slotValues.orderidslot.resolved + '. ';
                } else {
                slotStatus += 'match. '
            } // else {
                //
        }
        if (slotValues.orderidslot.ERstatus === 'ER_SUCCESS_NO_MATCH') {
            slotStatus += 'which did not match any slot value. ';
            console.log('***** consider adding "' + slotValues.orderidslot.heardAs + '" to the custom slot type used by slot orderidslot! ');
        }

        if( (slotValues.orderidslot.ERstatus === 'ER_SUCCESS_NO_MATCH') ||  (!slotValues.orderidslot.heardAs) ) {
            slotStatus += 'A few valid values are, ' + sayArray(getExampleSlotValues('Order_inquiry','orderidslot'), 'or');
        }
        //   SLOT: dateslot
        if (slotValues.dateslot.heardAs) {
            slotStatus += ' slot dateslot was heard as ' + slotValues.dateslot.heardAs + '. ';
        } else {
            slotStatus += 'slot dateslot is empty. ';
        }
        if (slotValues.dateslot.ERstatus === 'ER_SUCCESS_MATCH') {
            slotStatus += 'a valid ';
            if(slotValues.dateslot.resolved !== slotValues.dateslot.heardAs) {
                slotStatus += 'synonym for ' + slotValues.dateslot.resolved + '. ';
                } else {
                slotStatus += 'match. '
            } // else {
                //
        }
        if (slotValues.dateslot.ERstatus === 'ER_SUCCESS_NO_MATCH') {
            slotStatus += 'which did not match any slot value. ';
            console.log('***** consider adding "' + slotValues.dateslot.heardAs + '" to the custom slot type used by slot dateslot! ');
        }

        if( (slotValues.dateslot.ERstatus === 'ER_SUCCESS_NO_MATCH') ||  (!slotValues.dateslot.heardAs) ) {
            slotStatus += 'A few valid values are, ' + sayArray(getExampleSlotValues('Order_inquiry','dateslot'), 'or');
        }
        //   SLOT: numberslot
        if (slotValues.numberslot.heardAs) {
            slotStatus += ' slot numberslot was heard as ' + slotValues.numberslot.heardAs + '. ';
        } else {
            slotStatus += 'slot numberslot is empty. ';
        }
        if (slotValues.numberslot.ERstatus === 'ER_SUCCESS_MATCH') {
            slotStatus += 'a valid ';
            if(slotValues.numberslot.resolved !== slotValues.numberslot.heardAs) {
                slotStatus += 'synonym for ' + slotValues.numberslot.resolved + '. ';
                } else {
                slotStatus += 'match. '
            } // else {
                //
        }
        if (slotValues.numberslot.ERstatus === 'ER_SUCCESS_NO_MATCH') {
            slotStatus += 'which did not match any slot value. ';
            console.log('***** consider adding "' + slotValues.numberslot.heardAs + '" to the custom slot type used by slot numberslot! ');
        }

        if( (slotValues.numberslot.ERstatus === 'ER_SUCCESS_NO_MATCH') ||  (!slotValues.numberslot.heardAs) ) {
            slotStatus += 'A few valid values are, ' + sayArray(getExampleSlotValues('Order_inquiry','numberslot'), 'or');
        }
        //   SLOT: commodityslot
        if (slotValues.commodityslot.heardAs) {
            slotStatus += ' slot commodityslot was heard as ' + slotValues.commodityslot.heardAs + '. ';
        } else {
            slotStatus += 'slot commodityslot is empty. ';
        }
        if (slotValues.commodityslot.ERstatus === 'ER_SUCCESS_MATCH') {
            slotStatus += 'a valid ';
            if(slotValues.commodityslot.resolved !== slotValues.commodityslot.heardAs) {
                slotStatus += 'synonym for ' + slotValues.commodityslot.resolved + '. ';
                } else {
                slotStatus += 'match. '
            } // else {
                //
        }
        if (slotValues.commodityslot.ERstatus === 'ER_SUCCESS_NO_MATCH') {
            slotStatus += 'which did not match any slot value. ';
            console.log('***** consider adding "' + slotValues.commodityslot.heardAs + '" to the custom slot type used by slot commodityslot! ');
        }

        if( (slotValues.commodityslot.ERstatus === 'ER_SUCCESS_NO_MATCH') ||  (!slotValues.commodityslot.heardAs) ) {
            slotStatus += 'A few valid values are, ' + sayArray(getExampleSlotValues('Order_inquiry','commodityslot'), 'or');
        }

        say += slotStatus;


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const StartSignin_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'StartSignin' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from StartSignin. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Explore_detention_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Explore_detention' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Explore_detention. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Client_price_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Client_price' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Client_price. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const TiaQualities_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'TiaQualities' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from TiaQualities. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Transporter_fleet_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Transporter_fleet' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Transporter_fleet. ';

        let slotStatus = '';
        let resolvedSlot;

        let slotValues = getSlotValues(request.intent.slots);
        // getSlotValues returns .heardAs, .resolved, and .isValidated for each slot, according to request slot status codes ER_SUCCESS_MATCH, ER_SUCCESS_NO_MATCH, or traditional simple request slot without resolutions

        // console.log('***** slotValues: ' +  JSON.stringify(slotValues, null, 2));
        //   SLOT: fleetslot
        if (slotValues.fleetslot.heardAs) {
            slotStatus += ' slot fleetslot was heard as ' + slotValues.fleetslot.heardAs + '. ';
        } else {
            slotStatus += 'slot fleetslot is empty. ';
        }
        if (slotValues.fleetslot.ERstatus === 'ER_SUCCESS_MATCH') {
            slotStatus += 'a valid ';
            if(slotValues.fleetslot.resolved !== slotValues.fleetslot.heardAs) {
                slotStatus += 'synonym for ' + slotValues.fleetslot.resolved + '. ';
                } else {
                slotStatus += 'match. '
            } // else {
                //
        }
        if (slotValues.fleetslot.ERstatus === 'ER_SUCCESS_NO_MATCH') {
            slotStatus += 'which did not match any slot value. ';
            console.log('***** consider adding "' + slotValues.fleetslot.heardAs + '" to the custom slot type used by slot fleetslot! ');
        }

        if( (slotValues.fleetslot.ERstatus === 'ER_SUCCESS_NO_MATCH') ||  (!slotValues.fleetslot.heardAs) ) {
            slotStatus += 'A few valid values are, ' + sayArray(getExampleSlotValues('Transporter_fleet','fleetslot'), 'or');
        }

        say += slotStatus;


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Transporter_def_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Transporter_def' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Transporter_def. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Knowaboutus_teamOperations_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Knowaboutus_teamOperations' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Knowaboutus_teamOperations. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Knowaboutus_aboutme_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Knowaboutus_aboutme' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Knowaboutus_aboutme. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Client_gnrl_cancellation_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Client_gnrl_cancellation' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Client_gnrl_cancellation. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Knowaboutus_operationOurPhilosophy_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Knowaboutus_operationOurPhilosophy' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Knowaboutus_operationOurPhilosophy. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Transporter_vehicles_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Transporter_vehicles' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Transporter_vehicles. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Client_no_of_trux_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Client_no_of_trux' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Client_no_of_trux. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Shipper_def_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Shipper_def' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Shipper_def. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Transporter_no_of_trux_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Transporter_no_of_trux' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Transporter_no_of_trux. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Transporter_client_benefits_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Transporter_client_benefits' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Transporter_client_benefits. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Transporter_gnrl_cargo_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Transporter_gnrl_cargo' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Transporter_gnrl_cargo. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Transporter_gnrl_payment_terms_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Transporter_gnrl_payment_terms' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Transporter_gnrl_payment_terms. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Talk_to_fero_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Talk_to_fero' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Talk_to_fero. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Explore_insurance_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Explore_insurance' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Explore_insurance. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Client_trux_history_gnrl_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Client_trux_history_gnrl' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Client_trux_history_gnrl. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Client_follow_up_numberoftrux_no_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Client_follow_up_numberoftrux_no' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Client_follow_up_numberoftrux_no. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Explore_operationalSupport_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Explore_operationalSupport' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Explore_operationalSupport. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Knowaboutus_operationTrucksTypes_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Knowaboutus_operationTrucksTypes' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Knowaboutus_operationTrucksTypes. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Knowaboutus_technology_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Knowaboutus_technology' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Knowaboutus_technology. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Explore_pay_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Explore_pay' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Explore_pay. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Subscriptionmodel_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Subscriptionmodel' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Subscriptionmodel. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Client_gnrl_detention_charges_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Client_gnrl_detention_charges' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Client_gnrl_detention_charges. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Client_rates_feedback_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Client_rates_feedback' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Client_rates_feedback. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Knowaboutus_aboutmeTiaInfo_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Knowaboutus_aboutmeTiaInfo' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Knowaboutus_aboutmeTiaInfo. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Transporter_bid_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Transporter_bid' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Transporter_bid. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const ExploretruckTypes_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'ExploretruckTypes' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from ExploretruckTypes. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Explore_cancelcharge_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Explore_cancelcharge' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Explore_cancelcharge. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Transporter_lane_rates_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Transporter_lane_rates' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Transporter_lane_rates. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const TiaNationality_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'TiaNationality' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from TiaNationality. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Transporter_gnrl_instantquotes_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Transporter_gnrl_instantquotes' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Transporter_gnrl_instantquotes. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Insurance_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Insurance' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Insurance. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Other_options_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Other_options' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Other_options. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Client_gnrl_instantquotes_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Client_gnrl_instantquotes' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Client_gnrl_instantquotes. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Transporter_load_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Transporter_load' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Transporter_load. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Transporter_pay_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Transporter_pay' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Transporter_pay. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Client_order_new_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Client_order_new' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Client_order_new. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Client_ml_def_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Client_ml_def' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Client_ml_def. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Tia_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Tia' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Tia. ';

        let slotStatus = '';
        let resolvedSlot;

        let slotValues = getSlotValues(request.intent.slots);
        // getSlotValues returns .heardAs, .resolved, and .isValidated for each slot, according to request slot status codes ER_SUCCESS_MATCH, ER_SUCCESS_NO_MATCH, or traditional simple request slot without resolutions

        // console.log('***** slotValues: ' +  JSON.stringify(slotValues, null, 2));
        //   SLOT: tiaslot
        if (slotValues.tiaslot.heardAs) {
            slotStatus += ' slot tiaslot was heard as ' + slotValues.tiaslot.heardAs + '. ';
        } else {
            slotStatus += 'slot tiaslot is empty. ';
        }
        if (slotValues.tiaslot.ERstatus === 'ER_SUCCESS_MATCH') {
            slotStatus += 'a valid ';
            if(slotValues.tiaslot.resolved !== slotValues.tiaslot.heardAs) {
                slotStatus += 'synonym for ' + slotValues.tiaslot.resolved + '. ';
                } else {
                slotStatus += 'match. '
            } // else {
                //
        }
        if (slotValues.tiaslot.ERstatus === 'ER_SUCCESS_NO_MATCH') {
            slotStatus += 'which did not match any slot value. ';
            console.log('***** consider adding "' + slotValues.tiaslot.heardAs + '" to the custom slot type used by slot tiaslot! ');
        }

        if( (slotValues.tiaslot.ERstatus === 'ER_SUCCESS_NO_MATCH') ||  (!slotValues.tiaslot.heardAs) ) {
            slotStatus += 'A few valid values are, ' + sayArray(getExampleSlotValues('Tia','tiaslot'), 'or');
        }

        say += slotStatus;


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Client_follow_up_numberoftrux_yes_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Client_follow_up_numberoftrux_yes' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Client_follow_up_numberoftrux_yes. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Shipperindustry_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Shipperindustry' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Shipperindustry. ';

        let slotStatus = '';
        let resolvedSlot;

        let slotValues = getSlotValues(request.intent.slots);
        // getSlotValues returns .heardAs, .resolved, and .isValidated for each slot, according to request slot status codes ER_SUCCESS_MATCH, ER_SUCCESS_NO_MATCH, or traditional simple request slot without resolutions

        // console.log('***** slotValues: ' +  JSON.stringify(slotValues, null, 2));
        //   SLOT: shipper_industryslot
        if (slotValues.shipper_industryslot.heardAs) {
            slotStatus += ' slot shipper_industryslot was heard as ' + slotValues.shipper_industryslot.heardAs + '. ';
        } else {
            slotStatus += 'slot shipper_industryslot is empty. ';
        }
        if (slotValues.shipper_industryslot.ERstatus === 'ER_SUCCESS_MATCH') {
            slotStatus += 'a valid ';
            if(slotValues.shipper_industryslot.resolved !== slotValues.shipper_industryslot.heardAs) {
                slotStatus += 'synonym for ' + slotValues.shipper_industryslot.resolved + '. ';
                } else {
                slotStatus += 'match. '
            } // else {
                //
        }
        if (slotValues.shipper_industryslot.ERstatus === 'ER_SUCCESS_NO_MATCH') {
            slotStatus += 'which did not match any slot value. ';
            console.log('***** consider adding "' + slotValues.shipper_industryslot.heardAs + '" to the custom slot type used by slot shipper_industryslot! ');
        }

        if( (slotValues.shipper_industryslot.ERstatus === 'ER_SUCCESS_NO_MATCH') ||  (!slotValues.shipper_industryslot.heardAs) ) {
            slotStatus += 'A few valid values are, ' + sayArray(getExampleSlotValues('Shipperindustry','shipper_industryslot'), 'or');
        }

        say += slotStatus;


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Transporter_dispute_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Transporter_dispute' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Transporter_dispute. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Transporter_insurance_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Transporter_insurance' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Transporter_insurance. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Knowaboutus_technologyBlockchain_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Knowaboutus_technologyBlockchain' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Knowaboutus_technologyBlockchain. ';

        let slotStatus = '';
        let resolvedSlot;

        let slotValues = getSlotValues(request.intent.slots);
        // getSlotValues returns .heardAs, .resolved, and .isValidated for each slot, according to request slot status codes ER_SUCCESS_MATCH, ER_SUCCESS_NO_MATCH, or traditional simple request slot without resolutions

        // console.log('***** slotValues: ' +  JSON.stringify(slotValues, null, 2));
        //   SLOT: contractslot
        if (slotValues.contractslot.heardAs) {
            slotStatus += ' slot contractslot was heard as ' + slotValues.contractslot.heardAs + '. ';
        } else {
            slotStatus += 'slot contractslot is empty. ';
        }
        if (slotValues.contractslot.ERstatus === 'ER_SUCCESS_MATCH') {
            slotStatus += 'a valid ';
            if(slotValues.contractslot.resolved !== slotValues.contractslot.heardAs) {
                slotStatus += 'synonym for ' + slotValues.contractslot.resolved + '. ';
                } else {
                slotStatus += 'match. '
            } // else {
                //
        }
        if (slotValues.contractslot.ERstatus === 'ER_SUCCESS_NO_MATCH') {
            slotStatus += 'which did not match any slot value. ';
            console.log('***** consider adding "' + slotValues.contractslot.heardAs + '" to the custom slot type used by slot contractslot! ');
        }

        if( (slotValues.contractslot.ERstatus === 'ER_SUCCESS_NO_MATCH') ||  (!slotValues.contractslot.heardAs) ) {
            slotStatus += 'A few valid values are, ' + sayArray(getExampleSlotValues('Knowaboutus_technologyBlockchain','contractslot'), 'or');
        }

        say += slotStatus;


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const TiaRobotics_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'TiaRobotics' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from TiaRobotics. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const DefaultFallbackintentCustom_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'DefaultFallbackintentCustom' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from DefaultFallbackintentCustom. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Explore_philosophy_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Explore_philosophy' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Explore_philosophy. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const TiaFemale_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'TiaFemale' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from TiaFemale. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const Client_pricing_auth_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Client_pricing_auth' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from Client_pricing_auth. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const AMAZON_NavigateHomeIntent_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.NavigateHomeIntent' ;
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let say = 'Hello from AMAZON.NavigateHomeIntent. ';


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .getResponse();
    },
};

const LaunchRequest_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        const responseBuilder = handlerInput.responseBuilder;

        let say = 'hello' + ' and welcome to ' + invocationName + ' ! Say help to hear some options.';

        let skillTitle = capitalize(invocationName);


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .withStandardCard('Welcome!',
              'Hello!\nThis is a card for your skill, ' + skillTitle,
               welcomeCardImg.smallImageUrl, welcomeCardImg.largeImageUrl)
            .getResponse();
    },
};

const SessionEndedHandler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);
        return handlerInput.responseBuilder.getResponse();
    }
};

const ErrorHandler =  {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const request = handlerInput.requestEnvelope.request;

        console.log(`Error handled: ${error.message}`);
        // console.log(`Original Request was: ${JSON.stringify(request, null, 2)}`);

        return handlerInput.responseBuilder
            .speak('Sorry, an error occurred.  Please say again.')
            .reprompt('Sorry, an error occurred.  Please say again.')
            .getResponse();
    }
};


// 2. Constants ===========================================================================

    // Here you can define static data, to be used elsewhere in your code.  For example:
    //    const myString = "Hello World";
    //    const myArray  = [ "orange", "grape", "strawberry" ];
    //    const myObject = { "city": "Boston",  "state":"Massachusetts" };

const APP_ID = undefined;  // TODO replace with your Skill ID (OPTIONAL).

// 3.  Helper Functions ===================================================================

function capitalize(myString) {

     return myString.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }) ;
}


function randomElement(myArray) {
    return(myArray[Math.floor(Math.random() * myArray.length)]);
}

function stripSpeak(str) {
    return(str.replace('<speak>', '').replace('</speak>', ''));
}




function getSlotValues(filledSlots) {
    const slotValues = {};

    Object.keys(filledSlots).forEach((item) => {
        const name  = filledSlots[item].name;

        if (filledSlots[item] &&
            filledSlots[item].resolutions &&
            filledSlots[item].resolutions.resolutionsPerAuthority[0] &&
            filledSlots[item].resolutions.resolutionsPerAuthority[0].status &&
            filledSlots[item].resolutions.resolutionsPerAuthority[0].status.code) {
            switch (filledSlots[item].resolutions.resolutionsPerAuthority[0].status.code) {
                case 'ER_SUCCESS_MATCH':
                    slotValues[name] = {
                        heardAs: filledSlots[item].value,
                        resolved: filledSlots[item].resolutions.resolutionsPerAuthority[0].values[0].value.name,
                        ERstatus: 'ER_SUCCESS_MATCH'
                    };
                    break;
                case 'ER_SUCCESS_NO_MATCH':
                    slotValues[name] = {
                        heardAs: filledSlots[item].value,
                        resolved: '',
                        ERstatus: 'ER_SUCCESS_NO_MATCH'
                    };
                    break;
                default:
                    break;
            }
        } else {
            slotValues[name] = {
                heardAs: filledSlots[item].value,
                resolved: '',
                ERstatus: ''
            };
        }
    }, this);

    return slotValues;
}

function getExampleSlotValues(intentName, slotName) {

    let examples = [];
    let slotType = '';
    let slotValuesFull = [];

    let intents = model.interactionModel.languageModel.intents;
    for (let i = 0; i < intents.length; i++) {
        if (intents[i].name == intentName) {
            let slots = intents[i].slots;
            for (let j = 0; j < slots.length; j++) {
                if (slots[j].name === slotName) {
                    slotType = slots[j].type;

                }
            }
        }

    }
    let types = model.interactionModel.languageModel.types;
    for (let i = 0; i < types.length; i++) {
        if (types[i].name === slotType) {
            slotValuesFull = types[i].values;
        }
    }


    examples.push(slotValuesFull[0].name.value);
    examples.push(slotValuesFull[1].name.value);
    if (slotValuesFull.length > 2) {
        examples.push(slotValuesFull[2].name.value);
    }


    return examples;
}

function sayArray(myData, penultimateWord = 'and') {
    let result = '';

    myData.forEach(function(element, index, arr) {

        if (index === 0) {
            result = element;
        } else if (index === myData.length - 1) {
            result += ` ${penultimateWord} ${element}`;
        } else {
            result += `, ${element}`;
        }
    });
    return result;
}
function supportsDisplay(handlerInput) // returns true if the skill is running on a device with a display (Echo Show, Echo Spot, etc.)
{                                      //  Enable your skill for display as shown here: https://alexa.design/enabledisplay
    const hasDisplay =
        handlerInput.requestEnvelope.context &&
        handlerInput.requestEnvelope.context.System &&
        handlerInput.requestEnvelope.context.System.device &&
        handlerInput.requestEnvelope.context.System.device.supportedInterfaces &&
        handlerInput.requestEnvelope.context.System.device.supportedInterfaces.Display;

    return hasDisplay;
}


const welcomeCardImg = {
    smallImageUrl: "https://s3.amazonaws.com/skill-images-789/cards/card_plane720_480.png",
    largeImageUrl: "https://s3.amazonaws.com/skill-images-789/cards/card_plane1200_800.png"


};

const DisplayImg1 = {
    title: 'Jet Plane',
    url: 'https://s3.amazonaws.com/skill-images-789/display/plane340_340.png'
};
const DisplayImg2 = {
    title: 'Starry Sky',
    url: 'https://s3.amazonaws.com/skill-images-789/display/background1024_600.png'

};

function getCustomIntents() {
    const modelIntents = model.interactionModel.languageModel.intents;

    let customIntents = [];


    for (let i = 0; i < modelIntents.length; i++) {

        if(modelIntents[i].name.substring(0,7) != "AMAZON." && modelIntents[i].name !== "LaunchRequest" ) {
            customIntents.push(modelIntents[i]);
        }
    }
    return customIntents;
}

function getSampleUtterance(intent) {

    return randomElement(intent.samples);

}

function getPreviousIntent(attrs) {

    if (attrs.history && attrs.history.length > 1) {
        return attrs.history[attrs.history.length - 2].IntentRequest;

    } else {
        return false;
    }

}

function getPreviousSpeechOutput(attrs) {

    if (attrs.lastSpeechOutput && attrs.history.length > 1) {
        return attrs.lastSpeechOutput;

    } else {
        return false;
    }

}

function timeDelta(t1, t2) {

    const dt1 = new Date(t1);
    const dt2 = new Date(t2);
    const timeSpanMS = dt2.getTime() - dt1.getTime();
    const span = {
        "timeSpanMIN": Math.floor(timeSpanMS / (1000 * 60 )),
        "timeSpanHR": Math.floor(timeSpanMS / (1000 * 60 * 60)),
        "timeSpanDAY": Math.floor(timeSpanMS / (1000 * 60 * 60 * 24)),
        "timeSpanDesc" : ""
    };


    if (span.timeSpanHR < 2) {
        span.timeSpanDesc = span.timeSpanMIN + " minutes";
    } else if (span.timeSpanDAY < 2) {
        span.timeSpanDesc = span.timeSpanHR + " hours";
    } else {
        span.timeSpanDesc = span.timeSpanDAY + " days";
    }


    return span;

}


const InitMemoryAttributesInterceptor = {
    process(handlerInput) {
        let sessionAttributes = {};
        if(handlerInput.requestEnvelope.session['new']) {

            sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

            let memoryAttributes = getMemoryAttributes();

            if(Object.keys(sessionAttributes).length === 0) {

                Object.keys(memoryAttributes).forEach(function(key) {  // initialize all attributes from global list

                    sessionAttributes[key] = memoryAttributes[key];

                });

            }
            handlerInput.attributesManager.setSessionAttributes(sessionAttributes);


        }
    }
};

const RequestHistoryInterceptor = {
    process(handlerInput) {

        const thisRequest = handlerInput.requestEnvelope.request;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let history = sessionAttributes['history'] || [];

        let IntentRequest = {};
        if (thisRequest.type === 'IntentRequest' ) {

            let slots = [];

            IntentRequest = {
                'IntentRequest' : thisRequest.intent.name
            };

            if (thisRequest.intent.slots) {

                for (let slot in thisRequest.intent.slots) {
                    let slotObj = {};
                    slotObj[slot] = thisRequest.intent.slots[slot].value;
                    slots.push(slotObj);
                }

                IntentRequest = {
                    'IntentRequest' : thisRequest.intent.name,
                    'slots' : slots
                };

            }

        } else {
            IntentRequest = {'IntentRequest' : thisRequest.type};
        }
        if(history.length > maxHistorySize - 1) {
            history.shift();
        }
        history.push(IntentRequest);

        handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

    }

};




const RequestPersistenceInterceptor = {
    process(handlerInput) {

        if(handlerInput.requestEnvelope.session['new']) {

            return new Promise((resolve, reject) => {

                handlerInput.attributesManager.getPersistentAttributes()

                    .then((sessionAttributes) => {
                        sessionAttributes = sessionAttributes || {};


                        sessionAttributes['launchCount'] += 1;

                        handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

                        handlerInput.attributesManager.savePersistentAttributes()
                            .then(() => {
                                resolve();
                            })
                            .catch((err) => {
                                reject(err);
                            });
                    });

            });

        } // end session['new']
    }
};


const ResponseRecordSpeechOutputInterceptor = {
    process(handlerInput, responseOutput) {

        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        let lastSpeechOutput = {
            "outputSpeech":responseOutput.outputSpeech.ssml,
            "reprompt":responseOutput.reprompt.outputSpeech.ssml
        };

        sessionAttributes['lastSpeechOutput'] = lastSpeechOutput;

        handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

    }
};

const ResponsePersistenceInterceptor = {
    process(handlerInput, responseOutput) {

        const ses = (typeof responseOutput.shouldEndSession == "undefined" ? true : responseOutput.shouldEndSession);

        if(ses || handlerInput.requestEnvelope.request.type == 'SessionEndedRequest') { // skill was stopped or timed out

            let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

            sessionAttributes['lastUseTimestamp'] = new Date(handlerInput.requestEnvelope.request.timestamp).getTime();

            handlerInput.attributesManager.setPersistentAttributes(sessionAttributes);

            return new Promise((resolve, reject) => {
                handlerInput.attributesManager.savePersistentAttributes()
                    .then(() => {
                        resolve();
                    })
                    .catch((err) => {
                        reject(err);
                    });

            });

        }

    }
};



// 4. Exports handler function and setup ===================================================
const skillBuilder=Alexa.SkillBuilders.standard();
exports.handler = skillBuilder
    .addRequestHandlers(
        Client_rfq_Handler,
        Rateinquire_Handler,
        Client_password_Handler,
        Client_gnrl_clearance_Handler,
        TiaJoke_Handler,
        Explore_marketpresence_Handler,
        Knowaboutus_operationTia_Handler,
        ClientRegister_Handler,
        Transporter_gnrl_cancellation_Handler,
        Knowaboutus_contactDetails_Handler,
        Transporter_gnrl_shipment_Handler,
        Transporter_sim_Handler,
        Client_blockchain_Handler,
        Explore_borderClearance_Handler,
        Client_gnrl_cargo_Handler,
        Client_gnrl_helpers_Handler,
        Client_multiuser_Handler,
        Otp_def_client_Handler,
        Transporter_logbot_Handler,
        TransporterRegister_Handler,
        Orderinquire_Handler,
        Client_panel_Handler,
        Knowaboutus_teamTechnologyUsed_Handler,
        Knowaboutus_operation_Handler,
        Transporter_gnrl_clearance_Handler,
        Client_contracts_Handler,
        Login_Handler,
        Wanttobid_Handler,
        Regsitergen_Handler,
        Bid_def_Handler,
        Knowaboutus_Handler,
        TiaCreator_Handler,
        Transporter_track_Handler,
        Newuser_Handler,
        Knowaboutus_contactDetailsContactInfo_Handler,
        Client_gnrl_fleet_Handler,
        Explore_tia_Handler,
        Transporter_gnrl_helpers_Handler,
        Knowaboutus_operationTruckCount_Handler,
        Types_shipper_Handler,
        Explore_fleet_Handler,
        Types_Handler,
        OtherCustom_Handler,
        Knowaboutus_team_Handler,
        Other_Handler,
        Type_transporter_Handler,
        TransporterWantsToBid_Handler,
        Other_options_transporter_Handler,
        Trans_fleet_types_Handler,
        Transporter_detention_Handler,
        Transporter_gnrl_fleet_Handler,
        Knowaboutus_technologyBot_Handler,
        Knowaboutus_teamTia_Handler,
        Knowaboutus_operationOwnfleet_Handler,
        Explore_aboutFeroaiOperations_Handler,
        Client_gnrl_cancellationYes_Handler,
        Client_otp_rates_Handler,
        Client_trux_pay_Handler,
        Explore_functionalTruckCount_Handler,
        TiaBorn_Handler,
        Knowaboutus_technologyRealTimeTracking_Handler,
        Pod_Handler,
        Transporter_truxhistory_gnrl_Handler,
        Creatortrux_Handler,
        Transporter_gnrl_detention_charges_Handler,
        Feroseawelcome_Handler,
        Explore_Handler,
        DefaultWelcomeintent_Handler,
        Somethingelse_Handler,
        Client_order_Handler,
        Knowaboutus_technologyPredictRates_Handler,
        Rate_enquiry_Handler,
        Types_broker_Handler,
        No_Handler,
        Client_gnrl_payment_terms_Handler,
        Client_gnrl_cancellationNo_Handler,
        Transporter_password_Handler,
        Client_bid_Handler,
        Feroairwelcome_Handler,
        Knowaboutus_operationMarketPresence_Handler,
        Transporter_tia_cordinate_Handler,
        Client_gnrl_shipment_Handler,
        TiaPhysical_Handler,
        Transporter_contract_Handler,
        Reset_password_link_client_Handler,
        Order_inquiry_Handler,
        StartSignin_Handler,
        Explore_detention_Handler,
        Client_price_Handler,
        TiaQualities_Handler,
        Transporter_fleet_Handler,
        Transporter_def_Handler,
        Knowaboutus_teamOperations_Handler,
        Knowaboutus_aboutme_Handler,
        Client_gnrl_cancellation_Handler,
        Knowaboutus_operationOurPhilosophy_Handler,
        Transporter_vehicles_Handler,
        Client_no_of_trux_Handler,
        Shipper_def_Handler,
        Transporter_no_of_trux_Handler,
        Transporter_client_benefits_Handler,
        Transporter_gnrl_cargo_Handler,
        Transporter_gnrl_payment_terms_Handler,
        Talk_to_fero_Handler,
        Explore_insurance_Handler,
        Client_trux_history_gnrl_Handler,
        Client_follow_up_numberoftrux_no_Handler,
        Explore_operationalSupport_Handler,
        Knowaboutus_operationTrucksTypes_Handler,
        Knowaboutus_technology_Handler,
        Explore_pay_Handler,
        Subscriptionmodel_Handler,
        Client_gnrl_detention_charges_Handler,
        Client_rates_feedback_Handler,
        Knowaboutus_aboutmeTiaInfo_Handler,
        Transporter_bid_Handler,
        ExploretruckTypes_Handler,
        Explore_cancelcharge_Handler,
        Transporter_lane_rates_Handler,
        TiaNationality_Handler,
        Transporter_gnrl_instantquotes_Handler,
        Insurance_Handler,
        Other_options_Handler,
        Client_gnrl_instantquotes_Handler,
        Transporter_load_Handler,
        Transporter_pay_Handler,
        Client_order_new_Handler,
        Client_ml_def_Handler,
        Tia_Handler,
        Client_follow_up_numberoftrux_yes_Handler,
        Shipperindustry_Handler,
        Transporter_dispute_Handler,
        Transporter_insurance_Handler,
        Knowaboutus_technologyBlockchain_Handler,
        TiaRobotics_Handler,
        DefaultFallbackintentCustom_Handler,
        Explore_philosophy_Handler,
        TiaFemale_Handler,
        Client_pricing_auth_Handler,
        AMAZON_NavigateHomeIntent_Handler,
        LaunchRequest_Handler,
        SessionEndedHandler
    )
    .addErrorHandlers(ErrorHandler)
    .addRequestInterceptors(InitMemoryAttributesInterceptor)
    .addRequestInterceptors(RequestHistoryInterceptor)

   // .addResponseInterceptors(ResponseRecordSpeechOutputInterceptor)

 // .addRequestInterceptors(RequestPersistenceInterceptor)
 // .addResponseInterceptors(ResponsePersistenceInterceptor)

 // .withTableName("askMemorySkillTable")
 // .withAutoCreateTable(true)

    .lambda();


// End of Skill code -------------------------------------------------------------
// Static Language Model for reference

const model = {
  "interactionModel": {
    "languageModel": {
      "invocationName": "",
      "intents": [
        {
          "name": "Client_rfq",
          "slots": [],
          "samples": [
            "rfq information needed",
            "request for quotation",
            "quotation regarding information needed",
            "i am shipper can i handle my company rfq from fero trucking",
            "how to handle our company rfq from fero trucking",
            "how to handle our company request for quotation from fero trucking",
            "can i handle our company rfq from truxai"
          ]
        },
        {
          "name": "Rateinquire",
          "slots": [],
          "samples": [
            "rate inquire",
            "i want to inquire about rates",
            "i want to enquire about rates"
          ]
        },
        {
          "name": "Client_password",
          "slots": [],
          "samples": [
            "i want to reset password",
            "i want to change my password",
            "how to reset password",
            "how to remove password",
            "how to delete password",
            "how to change password",
            "how to chang my password ",
            "how do i reset password",
            "how do i delete my password ",
            "how can i reset password",
            "how can i reset my password",
            "delete password"
          ]
        },
        {
          "name": "Client_gnrl_clearance",
          "slots": [],
          "samples": [
            "what is the cost of custom clearance",
            "do you provide custom clearance how much do you charge for it",
            "do i get custom clearance"
          ]
        },
        {
          "name": "TiaJoke",
          "slots": [],
          "samples": []
        },
        {
          "name": "Explore_marketpresence",
          "slots": [],
          "samples": [
            "since how long you are in market",
            "market presence",
            "how long you are in market"
          ]
        },
        {
          "name": "Knowaboutus_operationTia",
          "slots": [
            {
              "name": "tiaslot",
              "type": "TIA"
            }
          ],
          "samples": [
            "{tiaslot}"
          ]
        },
        {
          "name": "ClientRegister",
          "slots": [
            {
              "name": "typesslot",
              "type": "TYPES"
            }
          ],
          "samples": [
            "want to register now",
            "register as {typesslot}",
            "please tell me the process of registration",
            "i want to register as shipper",
            "how to start as a shipper",
            "how to register with you guys ",
            "how to register",
            "how do i start with you guys",
            "how do i start as a shipper",
            "how do i register ",
            "how do i get started",
            "how customer will start business",
            "how can i get registered with you"
          ]
        },
        {
          "name": "Transporter_gnrl_cancellation",
          "slots": [],
          "samples": [
            "is there any cancellation charges",
            "cancellation charges information needed",
            "are there any cancellation charges"
          ]
        },
        {
          "name": "Knowaboutus_contactDetails",
          "slots": [],
          "samples": [
            "contact details"
          ]
        },
        {
          "name": "Transporter_gnrl_shipment",
          "slots": [],
          "samples": [
            "what happens if the shipments are damaged",
            "are shipments insured",
            "are all the damages covered by fero trucking",
            "all the damages covered by fero"
          ]
        },
        {
          "name": "Transporter_sim",
          "slots": [],
          "samples": [
            "will trux.ai provide sim card",
            "will i get sim card",
            "will i get mobile",
            "will i get data card",
            "will fero trucking provide sim card data package mobile to provide in order to give timely log bot updates",
            "will fero trucking provide mobile ",
            "will fero trucking provide data package",
            "sim cards and devices",
            "sim card",
            "i want sim card",
            "i want mobile",
            "i want data card",
            "do i get sim card ",
            "do i get mobile",
            "do i get data package ",
            "do i get data card",
            "data card"
          ]
        },
        {
          "name": "Client_blockchain",
          "slots": [],
          "samples": [
            "what is blockchain",
            "what do you mean by blockchain",
            "know about blockchain"
          ]
        },
        {
          "name": "Explore_borderClearance",
          "slots": [],
          "samples": [
            "what are the border clearance charges",
            "i want to know about the border clearance charges",
            "border clearance"
          ]
        },
        {
          "name": "Client_gnrl_cargo",
          "slots": [],
          "samples": [
            "cargo is insured",
            "are the cargo insured"
          ]
        },
        {
          "name": "Client_gnrl_helpers",
          "slots": [],
          "samples": [
            "how much helpers charge ",
            "do you provide helpers how much do they charge",
            "do helpers be given to handle loads"
          ]
        },
        {
          "name": "Client_multiuser",
          "slots": [],
          "samples": [
            "multiple users work on client panel for my company",
            "multiple users can work on client board",
            "multiple users",
            "more than one user can work on client panel",
            "more than one user can work on client board",
            "can multiple users work on client panel for my company",
            "can multiple people work on client panel",
            "can multiple people work on client board"
          ]
        },
        {
          "name": "Otp_def_client",
          "slots": [],
          "samples": [
            "what is otp"
          ]
        },
        {
          "name": "Transporter_logbot",
          "slots": [],
          "samples": [
            "which type of information can be seen on log bots",
            "what type of information can be seen on log bots",
            "what is log bot ",
            "what information can be seen on log bots",
            "order logbot"
          ]
        },
        {
          "name": "TransporterRegister",
          "slots": [],
          "samples": [
            "want to register now",
            "register as transporter",
            "please tell me the process of registration",
            "i want to register",
            "how to start as a transporter",
            "how to register",
            "how do i start with you guys",
            "how do i register",
            "how do i get started with fero trucking as a transporter",
            "how do i get started",
            "how can i get registered with you",
            "get started with truxaicarrier"
          ]
        },
        {
          "name": "Orderinquire",
          "slots": [],
          "samples": [
            "order status",
            "i want to know my order status",
            "i want order status"
          ]
        },
        {
          "name": "Client_panel",
          "slots": [],
          "samples": [
            "shipper panel working information needed",
            "shipper panel working info",
            "shipper panel",
            "shipper board working information needed",
            "shipper board working info needed",
            "how does shipper panel work",
            "how does shipper board work"
          ]
        },
        {
          "name": "Knowaboutus_teamTechnologyUsed",
          "slots": [],
          "samples": [
            "technology used",
            "TechnologyUsed"
          ]
        },
        {
          "name": "Knowaboutus_operation",
          "slots": [],
          "samples": [
            "operations info"
          ]
        },
        {
          "name": "Transporter_gnrl_clearance",
          "slots": [],
          "samples": [
            "what is the cost of custom clearance",
            "do you provide custom clearance how much do you charge for it"
          ]
        },
        {
          "name": "Client_contracts",
          "slots": [
            {
              "name": "contractslot",
              "type": "CONTRACT"
            }
          ],
          "samples": [
            "how to sign an {contractslot}",
            "how do i sign {contractslot}"
          ]
        },
        {
          "name": "Login",
          "slots": [],
          "samples": [
            "sign in"
          ]
        },
        {
          "name": "Wanttobid",
          "slots": [],
          "samples": [
            "want to bid"
          ]
        },
        {
          "name": "Regsitergen",
          "slots": [],
          "samples": [
            "tell about yourself",
            "register with us"
          ]
        },
        {
          "name": "Bid_def",
          "slots": [],
          "samples": [
            "what is bid "
          ]
        },
        {
          "name": "Knowaboutus",
          "slots": [],
          "samples": [
            "know about us",
            "know about fero"
          ]
        },
        {
          "name": "TiaCreator",
          "slots": [],
          "samples": [
            "who made you",
            "who is your creator",
            "who invented you",
            "who created you"
          ]
        },
        {
          "name": "Transporter_track",
          "slots": [],
          "samples": [
            "how to track truck ",
            "how to track my truck ",
            "how can i track my truck"
          ]
        },
        {
          "name": "Newuser",
          "slots": [],
          "samples": [
            "road freight"
          ]
        },
        {
          "name": "Knowaboutus_contactDetailsContactInfo",
          "slots": [],
          "samples": [
            "talk to fero",
            "get notified on launch",
            "get in touch with fero",
            "contact info",
            "contact fero"
          ]
        },
        {
          "name": "Client_gnrl_fleet",
          "slots": [
            {
              "name": "fleetslot",
              "type": "FLEET"
            }
          ],
          "samples": [
            "do you own your {fleetslot}",
            "do you have your own {fleetslot}",
            "are the {fleetslot} owned by you"
          ]
        },
        {
          "name": "Explore_tia",
          "slots": [
            {
              "name": "tiaslot",
              "type": "TIA"
            }
          ],
          "samples": [
            "{tiaslot}"
          ]
        },
        {
          "name": "Transporter_gnrl_helpers",
          "slots": [],
          "samples": [
            "how much helpers charge",
            "do you provide helpers  how much do they charge",
            "do helpers be given to handle loads "
          ]
        },
        {
          "name": "Knowaboutus_operationTruckCount",
          "slots": [],
          "samples": [
            "truck count",
            "how many trucks do you have"
          ]
        },
        {
          "name": "Types_shipper",
          "slots": [
            {
              "name": "typesslot",
              "type": "TYPES"
            }
          ],
          "samples": [
            "{typesslot}"
          ]
        },
        {
          "name": "Explore_fleet",
          "slots": [
            {
              "name": "fleetslot",
              "type": "FLEET"
            }
          ],
          "samples": [
            "own {fleetslot}"
          ]
        },
        {
          "name": "Types",
          "slots": [
            {
              "name": "typesslot",
              "type": "TYPES"
            }
          ],
          "samples": [
            "{typesslot}"
          ]
        },
        {
          "name": "OtherCustom",
          "slots": [],
          "samples": [
            "marketing and pr"
          ]
        },
        {
          "name": "Knowaboutus_team",
          "slots": [],
          "samples": [
            "team info"
          ]
        },
        {
          "name": "Other",
          "slots": [],
          "samples": [
            "other",
            "none of these",
            "none of the above"
          ]
        },
        {
          "name": "Type_transporter",
          "slots": [
            {
              "name": "typesslot",
              "type": "TYPES"
            }
          ],
          "samples": [
            "proceed as {typesslot}",
            "{typesslot}"
          ]
        },
        {
          "name": "TransporterWantsToBid",
          "slots": [],
          "samples": [
            "i want to bid"
          ]
        },
        {
          "name": "Other_options_transporter",
          "slots": [],
          "samples": [
            "other options"
          ]
        },
        {
          "name": "Trans_fleet_types",
          "slots": [
            {
              "name": "fleet_typeslot",
              "type": "FLEET_TYPE"
            }
          ],
          "samples": [
            "{fleet_typeslot}"
          ]
        },
        {
          "name": "Transporter_detention",
          "slots": [],
          "samples": [
            "how detention works",
            "how detention works in fero trucking ",
            "how detention works in fero",
            "how detention is done "
          ]
        },
        {
          "name": "Transporter_gnrl_fleet",
          "slots": [
            {
              "name": "fleetslot",
              "type": "FLEET"
            }
          ],
          "samples": [
            "do you own your {fleetslot}",
            "do you have your own {fleetslot}",
            "are the {fleetslot} owned by you"
          ]
        },
        {
          "name": "Knowaboutus_technologyBot",
          "slots": [
            {
              "name": "tiaslot",
              "type": "TIA"
            }
          ],
          "samples": [
            "bots",
            "{tiaslot}"
          ]
        },
        {
          "name": "Knowaboutus_teamTia",
          "slots": [
            {
              "name": "tiaslot",
              "type": "TIA"
            }
          ],
          "samples": [
            "{tiaslot}"
          ]
        },
        {
          "name": "Knowaboutus_operationOwnfleet",
          "slots": [],
          "samples": [
            "own fleet"
          ]
        },
        {
          "name": "Explore_aboutFeroaiOperations",
          "slots": [],
          "samples": [
            "i want to know about your operations",
            "i want to know about fero operations",
            "about fero.ai operations"
          ]
        },
        {
          "name": "Client_gnrl_cancellationYes",
          "slots": [],
          "samples": [
            "sounds good",
            "sounds correct",
            "sg",
            "right",
            "perfect",
            "okay i will",
            "okay",
            "ok",
            "of course",
            "it's okay",
            "it's fine",
            "it looks perfect",
            "i think so",
            "i don't mind",
            "i agree",
            "go ahead",
            "for sure",
            "exactly",
            "do it",
            "confirm",
            "alright why not",
            "absolutely",
            "sure",
            "sure",
            "sure why not",
            "that one works",
            "that works",
            "that's correct",
            "why not",
            "yeah",
            "yep",
            "yep that's ok",
            "yep that's right",
            "yes",
            "yes i agree",
            "yes i can",
            "yes i do",
            "yes please",
            "yes that's alright",
            "yes that't ok",
            "yes you can do it",
            "yup"
          ]
        },
        {
          "name": "Client_otp_rates",
          "slots": [],
          "samples": [
            "otp and other queries",
            "i want otp for rates confirmation",
            "how to get otp for rates confirmation",
            "how to get one time password for rates confirmation",
            "how do i get rates confirmation",
            "how do i get otp for rates confirmation"
          ]
        },
        {
          "name": "Client_trux_pay",
          "slots": [],
          "samples": [
            "how to pay for the orders",
            "how to pay",
            "how can i pay for the orders",
            "how can i pay fero for the orders"
          ]
        },
        {
          "name": "Explore_functionalTruckCount",
          "slots": [],
          "samples": [
            "how many trucks do you have",
            "functional truck count"
          ]
        },
        {
          "name": "TiaBorn",
          "slots": [],
          "samples": [
            "when were you invented ",
            "when were you born ",
            "on which day you were created"
          ]
        },
        {
          "name": "Knowaboutus_technologyRealTimeTracking",
          "slots": [],
          "samples": [
            "real time tracking"
          ]
        },
        {
          "name": "Pod",
          "slots": [
            {
              "name": "othersslot",
              "type": "OTHERS"
            }
          ],
          "samples": [
            "what is the meaning of {othersslot}",
            "{othersslot}"
          ]
        },
        {
          "name": "Transporter_truxhistory_gnrl",
          "slots": [],
          "samples": [
            "how much time you have been in the market",
            "how long have you been on the market",
            "for how long you are operating in the market"
          ]
        },
        {
          "name": "Creatortrux",
          "slots": [],
          "samples": [
            "who are you"
          ]
        },
        {
          "name": "Transporter_gnrl_detention_charges",
          "slots": [],
          "samples": [
            "what are the detention charges",
            "how much is the detention charge"
          ]
        },
        {
          "name": "Feroseawelcome",
          "slots": [],
          "samples": [
            "fero sea freight",
            "explore fero sea freight"
          ]
        },
        {
          "name": "Explore",
          "slots": [],
          "samples": [
            "just here to explore",
            "explore fero road freight",
            "explore fero"
          ]
        },
        {
          "name": "DefaultWelcomeintent",
          "slots": [],
          "samples": [
            "go back"
          ]
        },
        {
          "name": "Somethingelse",
          "slots": [],
          "samples": [
            "something else"
          ]
        },
        {
          "name": "Client_order",
          "slots": [
            {
              "name": "fleetslot",
              "type": "FLEET"
            }
          ],
          "samples": [
            "can i give orders to my own {fleetslot} through shipper panel",
            "can i give orders to my own {fleetslot} of people through shipper panel",
            "can i give orders to my own {fleetslot} of people",
            "can i give orders to my own {fleetslot}"
          ]
        },
        {
          "name": "Knowaboutus_technologyPredictRates",
          "slots": [],
          "samples": []
        },
        {
          "name": "Rate_enquiry",
          "slots": [
            {
              "name": "locationslot",
              "type": "LOCATION"
            }
          ],
          "samples": [
            "{locationslot} to {locationslot}",
            "can you tell me the rates from {locationslot} to {locationslot}",
            "hey tia i want cost from {locationslot} to {locationslot}",
            "i need a truck",
            "i need a truck from {locationslot} to {locationslot}",
            "i need rate from {locationslot} to {locationslot}",
            "i want a rate from {locationslot} to {locationslot}",
            "rate from {locationslot} to {locationslot}",
            "what is cost ",
            "what is rate"
          ]
        },
        {
          "name": "Types_broker",
          "slots": [
            {
              "name": "typesslot",
              "type": "TYPES"
            }
          ],
          "samples": [
            "{typesslot}"
          ]
        },
        {
          "name": "No",
          "slots": [],
          "samples": [
            "nothing",
            "no thnakyou",
            "no"
          ]
        },
        {
          "name": "Client_gnrl_payment_terms",
          "slots": [],
          "samples": [
            "what are the payment terms",
            "in how many days do we get paid ",
            "i want to know the payment terms"
          ]
        },
        {
          "name": "Client_gnrl_cancellationNo",
          "slots": [],
          "samples": [
            "definitely not",
            "don't",
            "don't do it",
            "i can't",
            "i disagree",
            "i don't",
            "i don't think so",
            "i don't want",
            "i don't want that",
            "i'm not",
            "na",
            "nah",
            "nah i'm good",
            "never",
            "no",
            "no don't",
            "no i cannot",
            "no it isn't",
            "no maybe next time",
            "no never",
            "no no don't",
            "no not really",
            "no thanks",
            "no that's be all",
            "no that's fine thank you",
            "no that's ok",
            "no that's okay",
            "no way",
            "no way no",
            "no we are good",
            "nope",
            "nope not really",
            "not",
            "not at all",
            "not interested",
            "not really",
            "not right now",
            "not this time",
            "not today",
            "nothing",
            "nothing else",
            "nothing else thanks",
            "thanks but no",
            "thanks but not this time"
          ]
        },
        {
          "name": "Transporter_password",
          "slots": [],
          "samples": [
            "how do i change my password ",
            "how do i delete my password ",
            "how do i reset my password",
            "how do i reset password",
            "how to change my password ",
            "how to change password ",
            "how to delete my password ",
            "how to reset password ",
            "i want to change my password",
            "i want to delete my password",
            "i want to reset my password",
            "reset password"
          ]
        },
        {
          "name": "Client_bid",
          "slots": [
            {
              "name": "biddingslot",
              "type": "BIDDING"
            }
          ],
          "samples": [
            "{biddingslot}",
            "how can i bid in truxai",
            "how can i bid",
            "how can i offer price ",
            "how to bid for lanes ",
            "how to bid",
            "how to offer price",
            "i want to bid"
          ]
        },
        {
          "name": "Feroairwelcome",
          "slots": [],
          "samples": [
            "fero air freight",
            "explore fero air freight"
          ]
        },
        {
          "name": "Knowaboutus_operationMarketPresence",
          "slots": [],
          "samples": [
            "market presence",
            "for how long you are operating in the market"
          ]
        },
        {
          "name": "Transporter_tia_cordinate",
          "slots": [],
          "samples": [
            "how tia coordinate for company operations",
            "how can tia coordinate operations",
            "how can tia coordinate for my company operations"
          ]
        },
        {
          "name": "Client_gnrl_shipment",
          "slots": [],
          "samples": [
            "what happens if the shipments are damaged",
            "shipment insurance",
            "are shipments insured",
            "are all the damages covered by ferotrucking",
            "all the damages covered by ferotrucking"
          ]
        },
        {
          "name": "TiaPhysical",
          "slots": [],
          "samples": [
            "do you have physical form",
            "do you have a physical touch"
          ]
        },
        {
          "name": "Transporter_contract",
          "slots": [
            {
              "name": "contractslot",
              "type": "CONTRACT"
            }
          ],
          "samples": [
            "what type of contracts are available with fero trucking ",
            "what type of trips are available with fero trucking ",
            "what type of trips or {contractslot} are available with fero trucking",
            "what type of trips contracts are available with fero trucking"
          ]
        },
        {
          "name": "Reset_password_link_client",
          "slots": [],
          "samples": []
        },
        {
          "name": "Order_inquiry",
          "slots": [
            {
              "name": "orderidslot",
              "type": "ORDERID"
            },
            {
              "name": "dateslot",
              "type": "AMAZON.DATE"
            },
            {
              "name": "numberslot",
              "type": "AMAZON.NUMBER"
            },
            {
              "name": "commodityslot",
              "type": "COMMODITY"
            }
          ],
          "samples": [
            "{orderidslot}",
            "i want to know order status of a truck to that has drop date of",
            "i want to know status of my orders picked on",
            "i want to know status of my orders picked on {dateslot}",
            "i want to know the order status of my truck which is left from",
            "i want to know the status of order placed on",
            "i want to know the status of truck that left to",
            "order status",
            "pickup location is",
            "what is my order status ",
            "what is my order status whose order id is {orderidslot}",
            "what is the order status of my trucks loaded with {commodityslot}",
            "what is the status of my order from",
            "what is the status of my order from to",
            "what is the status of my order which was ordered on",
            "what is the status of my order which was picked up on {dateslot}",
            "what is the status of my order whose pickup location is",
            "what is the status of my order with {numberslot} trucks to",
            "what is the status of my {orderidslot}",
            "what is the status of order going to",
            "what is the status of order on",
            "what is the status of {orderidslot}"
          ]
        },
        {
          "name": "StartSignin",
          "slots": [],
          "samples": []
        },
        {
          "name": "Explore_detention",
          "slots": [],
          "samples": [
            "what are the detention criteria ",
            "what are the detention charges ",
            "detention info",
            "detention charges"
          ]
        },
        {
          "name": "Client_price",
          "slots": [],
          "samples": [
            "how are prices decided ",
            "how are prices given",
            "need some information regarding pricing",
            "pricing info needed",
            "pricing information needed",
            "rate forecasting",
            "planning"
          ]
        },
        {
          "name": "TiaQualities",
          "slots": [],
          "samples": []
        },
        {
          "name": "Transporter_fleet",
          "slots": [
            {
              "name": "fleetslot",
              "type": "FLEET"
            }
          ],
          "samples": [
            "how can i lease my {fleetslot} with fero trucking",
            "how can i lease my {fleetslot}",
            "fleet management"
          ]
        },
        {
          "name": "Transporter_def",
          "slots": [],
          "samples": [
            "who is transporter",
            "what does a transporter do",
            "how transporter works "
          ]
        },
        {
          "name": "Knowaboutus_teamOperations",
          "slots": [],
          "samples": [
            "operations info"
          ]
        },
        {
          "name": "Knowaboutus_aboutme",
          "slots": [],
          "samples": [
            "about me"
          ]
        },
        {
          "name": "Client_gnrl_cancellation",
          "slots": [],
          "samples": [
            "is there any cancellation charges",
            "cancellation charges information needed",
            "are there any cancellation charges "
          ]
        },
        {
          "name": "Knowaboutus_operationOurPhilosophy",
          "slots": [],
          "samples": []
        },
        {
          "name": "Transporter_vehicles",
          "slots": [],
          "samples": [
            "which vehicles can get registered",
            "which type of vehicles can get registered",
            "vehicle registration",
            "types of vehicles registered with tia"
          ]
        },
        {
          "name": "Client_no_of_trux",
          "slots": [],
          "samples": [
            "how many trucks do you have ",
            "how many trucks you have for domestic trips",
            "how many trucks you have for trips ",
            "total trucks for domestic trips ",
            "total trucks for trips "
          ]
        },
        {
          "name": "Shipper_def",
          "slots": [],
          "samples": [
            "who is shipper ",
            "what do you mean by shipper"
          ]
        },
        {
          "name": "Transporter_no_of_trux",
          "slots": [],
          "samples": [
            "how many trucks you have for domestic trips"
          ]
        },
        {
          "name": "Transporter_client_benefits",
          "slots": [],
          "samples": [
            "benifits of fero trucking",
            "what are the benefits of association",
            "what are the benefits of association with trux ",
            "what are the benefits of association with trux ai ",
            "what are the benefits of fero trucking "
          ]
        },
        {
          "name": "Transporter_gnrl_cargo",
          "slots": [],
          "samples": [
            "are the cargo insured"
          ]
        },
        {
          "name": "Transporter_gnrl_payment_terms",
          "slots": [],
          "samples": [
            "what are the payment terms",
            "payment terms",
            "in how many days do we get paid"
          ]
        },
        {
          "name": "Talk_to_fero",
          "slots": [],
          "samples": [
            "talk to fero",
            "get in touch with fero"
          ]
        },
        {
          "name": "Explore_insurance",
          "slots": [],
          "samples": [
            "insurance information needed",
            "insurance info needed",
            "insurance info"
          ]
        },
        {
          "name": "Client_trux_history_gnrl",
          "slots": [],
          "samples": [
            "how much time you have been in the market",
            "how long have you been on the market ",
            "for how long you are operating in the market"
          ]
        },
        {
          "name": "Client_follow_up_numberoftrux_no",
          "slots": [],
          "samples": [
            "no",
            "no i will look later"
          ]
        },
        {
          "name": "Explore_operationalSupport",
          "slots": [],
          "samples": []
        },
        {
          "name": "Knowaboutus_operationTrucksTypes",
          "slots": [],
          "samples": [
            "which vehicles can get registered",
            "truck types",
            "how many trucks types do you register"
          ]
        },
        {
          "name": "Knowaboutus_technology",
          "slots": [],
          "samples": [
            "technology used"
          ]
        },
        {
          "name": "Explore_pay",
          "slots": [],
          "samples": [
            "payment information needed",
            "payment info needed",
            "payment info"
          ]
        },
        {
          "name": "Subscriptionmodel",
          "slots": [],
          "samples": []
        },
        {
          "name": "Client_gnrl_detention_charges",
          "slots": [],
          "samples": []
        },
        {
          "name": "Client_rates_feedback",
          "slots": [],
          "samples": [
            "not happy with the rates of fero trucking",
            "prices of fero trucking are ok ",
            "prices of fero trucking is not good",
            "rates are average",
            "rates are bad of fero trucking",
            "rates of fero trucking are not good",
            "what if i'm not happy with the rates of fero trucking"
          ]
        },
        {
          "name": "Knowaboutus_aboutmeTiaInfo",
          "slots": [],
          "samples": [
            "who are you ",
            "tia info"
          ]
        },
        {
          "name": "Transporter_bid",
          "slots": [],
          "samples": [
            "bidding info",
            "how can i auction ",
            "how do i auction ",
            "how do i bid ",
            "how to auction",
            "how to bid",
            "how to offer price for lanes"
          ]
        },
        {
          "name": "ExploretruckTypes",
          "slots": [],
          "samples": [
            "truck types"
          ]
        },
        {
          "name": "Explore_cancelcharge",
          "slots": [],
          "samples": [
            "does fero trucking charge any cancellation fee",
            "cancellation charges",
            "are there any cancellation fee",
            "are there any cancellation charges"
          ]
        },
        {
          "name": "Transporter_lane_rates",
          "slots": [],
          "samples": [
            "how can i upload lane rates ",
            "how to upload lane rates ",
            "lane rates information needed",
            "lane rates regarding information needed",
            "lane rates upload information needed"
          ]
        },
        {
          "name": "TiaNationality",
          "slots": [],
          "samples": [
            "which nation do you belong",
            "what is your nationality"
          ]
        },
        {
          "name": "Transporter_gnrl_instantquotes",
          "slots": [],
          "samples": [
            "how do you provide the instant quotes"
          ]
        },
        {
          "name": "Insurance",
          "slots": [],
          "samples": [
            "insurance info"
          ]
        },
        {
          "name": "Other_options",
          "slots": [],
          "samples": []
        },
        {
          "name": "Client_gnrl_instantquotes",
          "slots": [],
          "samples": [
            "how do you provide the instant quotes",
            "do i get instant quotes "
          ]
        },
        {
          "name": "Transporter_load",
          "slots": [],
          "samples": [
            "how can i get load from ferotrucking",
            "how can i load ",
            "how loading can be done ",
            "how to load",
            "how to load from ferotrucking"
          ]
        },
        {
          "name": "Transporter_pay",
          "slots": [],
          "samples": [
            "how do i get paid",
            "how does transporter get paid",
            "how the payment of transporter is done ",
            "payment info",
            "transporter paying info needed"
          ]
        },
        {
          "name": "Client_order_new",
          "slots": [],
          "samples": [
            "how to place an order",
            "how to order",
            "how do i place order"
          ]
        },
        {
          "name": "Client_ml_def",
          "slots": [],
          "samples": []
        },
        {
          "name": "Tia",
          "slots": [
            {
              "name": "tiaslot",
              "type": "TIA"
            }
          ],
          "samples": [
            "{tiaslot}",
            "log bot information needed",
            "tia",
            "what information can be seen on log bots and obtained",
            "what is log bot",
            "what is  ",
            "what is "
          ]
        },
        {
          "name": "Client_follow_up_numberoftrux_yes",
          "slots": [],
          "samples": [
            "yes why not",
            "yes"
          ]
        },
        {
          "name": "Shipperindustry",
          "slots": [
            {
              "name": "shipper_industryslot",
              "type": "SHIPPER_INDUSTRY"
            }
          ],
          "samples": [
            "{shipper_industryslot}"
          ]
        },
        {
          "name": "Transporter_dispute",
          "slots": [],
          "samples": [
            "how fero trucking handle service charge disputes problem ",
            "how fero trucking handle service charge disputes problems ",
            "how fero trucking handle service charge disputes",
            "service charge disputes problems"
          ]
        },
        {
          "name": "Transporter_insurance",
          "slots": [],
          "samples": [
            "how do i get insurance"
          ]
        },
        {
          "name": "Knowaboutus_technologyBlockchain",
          "slots": [
            {
              "name": "contractslot",
              "type": "CONTRACT"
            }
          ],
          "samples": [
            "blockchain {contractslot}"
          ]
        },
        {
          "name": "TiaRobotics",
          "slots": [],
          "samples": []
        },
        {
          "name": "DefaultFallbackintentCustom",
          "slots": [],
          "samples": []
        },
        {
          "name": "Explore_philosophy",
          "slots": [],
          "samples": []
        },
        {
          "name": "TiaFemale",
          "slots": [],
          "samples": [
            "are you a female"
          ]
        },
        {
          "name": "Client_pricing_auth",
          "slots": [],
          "samples": [
            "are pricing are authenticated",
            "cost is authenticated or not",
            "price is authenticated or not",
            "prices in truxai are authenticated",
            "pricing authentication"
          ]
        },
        {
          "name": "AMAZON.NavigateHomeIntent",
          "samples": []
        },
        {
          "name": "LaunchRequest"
        }
      ],
      "types": [
        {
          "name": "TIA",
          "values": [
            {
              "id": "TIA",
              "name": {
                "value": "TIA"
              }
            }
          ]
        },
        {
          "name": "TYPES",
          "values": [
            {
              "id": "Transporter",
              "name": {
                "value": "Carrier",
                "synonyms": [
                  "transporter",
                  "Carrier",
                  "carrier"
                ]
              }
            },
            {
              "id": "Shipper",
              "name": {
                "value": "Shipper",
                "synonyms": [
                  "shipper"
                ]
              }
            }
          ]
        },
        {
          "name": "CONTRACT",
          "values": [
            {
              "id": "Contract",
              "name": {
                "value": "Contract",
                "synonyms": [
                  "Bond",
                  "Agreement"
                ]
              }
            }
          ]
        },
        {
          "name": "FLEET",
          "values": [
            {
              "id": "Fleet",
              "name": {
                "value": "Fleet",
                "synonyms": [
                  "Group",
                  "group"
                ]
              }
            }
          ]
        },
        {
          "name": "FLEET_TYPE",
          "values": [
            {
              "name": {
                "value": "Single Operators"
              }
            },
            {
              "id": "Large",
              "name": {
                "value": "Large"
              }
            },
            {
              "name": {
                "value": "Trucking Broker"
              }
            },
            {
              "name": {
                "value": "1-20 (Medium)"
              }
            }
          ]
        },
        {
          "name": "OTHERS",
          "values": [
            {
              "id": "POD",
              "name": {
                "value": "POD"
              }
            }
          ]
        },
        {
          "name": "LOCATION",
          "values": [
            {
              "name": {
                "value": "Dubai Investments Park - Dubai - United Arab Emirates",
                "synonyms": [
                  "Dubai Investments Park",
                  "dubai investments park",
                  "dip",
                  "DIP"
                ]
              }
            },
            {
              "name": {
                "value": "Al Quoz - Dubai - United Arab Emirates",
                "synonyms": [
                  "Al quoz",
                  "Al Quoz",
                  "al quoz"
                ]
              }
            },
            {
              "name": {
                "value": "Umm Al Quwain - Umm Al Quawain - United Arab Emirates",
                "synonyms": [
                  "Umm Al Quwain",
                  "umm al quwain"
                ]
              }
            },
            {
              "name": {
                "value": "Al Ain - Abu Dhabi - United Arab Emirates",
                "synonyms": [
                  "Al Ain",
                  "al ain",
                  "AL AIN"
                ]
              }
            },
            {
              "id": "Dubai",
              "name": {
                "value": "Dubai - United Arab Emirates",
                "synonyms": [
                  "dubai",
                  "Dubai - United Arab Emirates"
                ]
              }
            },
            {
              "name": {
                "value": "Sharjah - United Arab Emirates",
                "synonyms": [
                  "sharjah",
                  "Sharjah"
                ]
              }
            },
            {
              "name": {
                "value": "Ras al Khaimah - United Arab Emirates",
                "synonyms": [
                  "Ras al Khaimah",
                  "ras al khaimah"
                ]
              }
            },
            {
              "name": {
                "value": "Al Awir - Dubai - United Arab Emirates",
                "synonyms": [
                  "Al Awir",
                  "al awir"
                ]
              }
            },
            {
              "id": "Jeddah",
              "name": {
                "value": "Jeddah Saudi Arabia",
                "synonyms": [
                  "jeddah",
                  "jeddah saudi arabia",
                  "Jedddah Saudi Arabia"
                ]
              }
            },
            {
              "name": {
                "value": "Industrial Area - Sharjah - United Arab Emirates",
                "synonyms": [
                  "Industrial Area"
                ]
              }
            },
            {
              "name": {
                "value": "Fujairah - United Arab Emirates",
                "synonyms": [
                  "fujairah",
                  "Fujairah"
                ]
              }
            },
            {
              "name": {
                "value": "Dammam Saudi Arabia",
                "synonyms": [
                  "dammam",
                  "Dammam Saudi Arabia"
                ]
              }
            },
            {
              "name": {
                "value": "Jebel Ali - Dubai - United Arab Emirates",
                "synonyms": [
                  "Jebel Ali",
                  "jebel ali"
                ]
              }
            },
            {
              "name": {
                "value": "Dubai Industrial City - Dubai - United Arab Emirates",
                "synonyms": [
                  "Dubai Industrial City",
                  "dubai industrial city",
                  "Dubai Industrial City",
                  "DIC",
                  "dic"
                ]
              }
            },
            {
              "name": {
                "value": "$source"
              }
            },
            {
              "name": {
                "value": "Abu Dhabi - United Arab Emirates",
                "synonyms": [
                  "Abu Dhabi",
                  "abu dhabi"
                ]
              }
            },
            {
              "name": {
                "value": "Musaffah - Abu Dhabi - United Arab Emirates",
                "synonyms": [
                  "Musaffah",
                  "musaffah"
                ]
              }
            },
            {
              "name": {
                "value": "Dubai World Central - Dubai - United Arab Emirates",
                "synonyms": [
                  "dubai world central",
                  "Dubai World Central",
                  "Dubai world central",
                  "DWC",
                  "DWC",
                  "dwc"
                ]
              }
            },
            {
              "name": {
                "value": "Jeddah Tower, Jeddah Saudi Arabia",
                "synonyms": [
                  "jeddah tower",
                  "Jeddah Tower"
                ]
              }
            },
            {
              "name": {
                "value": "Ajman - United Arab Emirates",
                "synonyms": [
                  "ajman",
                  "Ajman"
                ]
              }
            },
            {
              "name": {
                "value": "Dubai - United Arab Emirates",
                "synonyms": [
                  "Dubai",
                  "dubai"
                ]
              }
            },
            {
              "name": {
                "value": "Ras Al Khor - Dubai - United Arab Emirates",
                "synonyms": [
                  "Ras Al Khor",
                  "ras al khor",
                  "rasalkhor"
                ]
              }
            },
            {
              "name": {
                "value": "Ibri, Oman",
                "synonyms": [
                  "Ibri",
                  "ibri"
                ]
              }
            },
            {
              "name": {
                "value": "Dubai Marina",
                "synonyms": [
                  "dubai marina",
                  "Dubai marina"
                ]
              }
            },
            {
              "name": {
                "value": "Jubail Saudi Arabia",
                "synonyms": [
                  "jubail",
                  "Jubail"
                ]
              }
            },
            {
              "name": {
                "value": "Hafar Al Batin Saudi Arabia",
                "synonyms": [
                  "hafar al batin",
                  "Hafar Al Batin",
                  "hafaralbatin"
                ]
              }
            },
            {
              "name": {
                "value": "Abdali, Kuwait",
                "synonyms": [
                  "abdali",
                  "Abdali"
                ]
              }
            },
            {
              "name": {
                "value": "Amman, Jordan",
                "synonyms": [
                  "amman",
                  "Amman"
                ]
              }
            },
            {
              "name": {
                "value": "Khalifa Port - Abu Dhabi - United Arab Emirates",
                "synonyms": [
                  "Khalifa Port",
                  "Abu Dhabi Khalifa Port",
                  "abu dhabi khalifa port",
                  "Abu dhabi khalifa port",
                  "khalifa port"
                ]
              }
            },
            {
              "name": {
                "value": "Abu",
                "synonyms": [
                  "abu"
                ]
              }
            },
            {
              "name": {
                "value": "Al Quoz",
                "synonyms": [
                  "Al quoz",
                  "al quoz",
                  "al Quoz"
                ]
              }
            },
            {
              "name": {
                "value": "Riyadh Saudi Arabia",
                "synonyms": [
                  "Riyadh",
                  "riyadh"
                ]
              }
            },
            {
              "name": {
                "value": "Al Khobar Saudi Arabia",
                "synonyms": [
                  "al khobar",
                  "alkhobar"
                ]
              }
            },
            {
              "name": {
                "value": "Jeddah Saudi Arabia",
                "synonyms": [
                  "jeddah",
                  "Jeddah"
                ]
              }
            },
            {
              "name": {
                "value": "Barka, Oman",
                "synonyms": [
                  "barka",
                  "Barka"
                ]
              }
            },
            {
              "name": {
                "value": "Aqaba, Jordan",
                "synonyms": [
                  "Aqaba",
                  "aqaba"
                ]
              }
            },
            {
              "name": {
                "value": "Jebel Ali Free Zone ( South ), Dubai - United Arab Emirates",
                "synonyms": [
                  "jebel ali south"
                ]
              }
            },
            {
              "name": {
                "value": "Rusayl, Oman",
                "synonyms": [
                  "Rusayl",
                  "rusayl"
                ]
              }
            },
            {
              "name": {
                "value": "Sakaka Saudi Arabia",
                "synonyms": [
                  "sakaka",
                  "Sakaka"
                ]
              }
            },
            {
              "name": {
                "value": "Musaffah - Abu Dhabi - United Arab Emirates",
                "synonyms": [
                  "Musaffah",
                  "musaffah",
                  "Abu Dhabi Musaffah",
                  "abu dhabi musaffah"
                ]
              }
            },
            {
              "name": {
                "value": "Fujairah - United Arab Emirates",
                "synonyms": [
                  "fujairah"
                ]
              }
            },
            {
              "name": {
                "value": "Jebel Ali Industrial Area - Dubai - United Arab Emirates",
                "synonyms": [
                  "jebel ali industrial",
                  "jebel ali industrial area"
                ]
              }
            },
            {
              "name": {
                "value": "Dubai - United Arab Emirates",
                "synonyms": [
                  "dubai",
                  "DUBAI"
                ]
              }
            },
            {
              "name": {
                "value": "Manama, Bahrain",
                "synonyms": [
                  "Manama",
                  "manama"
                ]
              }
            },
            {
              "name": {
                "value": "Mecca Saudi Arabia",
                "synonyms": [
                  "mecca",
                  "Mecca"
                ]
              }
            },
            {
              "name": {
                "value": "Al Karama",
                "synonyms": [
                  "al karama",
                  "Al karama"
                ]
              }
            },
            {
              "name": {
                "value": "Jazan Saudi Arabia",
                "synonyms": [
                  "Jazan",
                  "jazan"
                ]
              }
            },
            {
              "name": {
                "value": "Al Ain - Abu Dhabi - United Arab Emirates",
                "synonyms": [
                  "Al ain",
                  "al ain"
                ]
              }
            },
            {
              "name": {
                "value": "Irbid, Jordan",
                "synonyms": [
                  "Irbid",
                  "irbid"
                ]
              }
            },
            {
              "name": {
                "value": "Dammam Saudi Arabia",
                "synonyms": [
                  "Dammam",
                  "dammam"
                ]
              }
            },
            {
              "name": {
                "value": "Al Saja'a Industrial Suburb",
                "synonyms": [
                  "al saja'a industrial suburb",
                  "Al saja'a industrial suburb"
                ]
              }
            },
            {
              "name": {
                "value": "Ajman - United Arab Emirates",
                "synonyms": [
                  "ajman"
                ]
              }
            },
            {
              "name": {
                "value": "Muscat, Oman",
                "synonyms": [
                  "muscat",
                  "muscat,oman",
                  "Muscat, Oman"
                ]
              }
            },
            {
              "name": {
                "value": "$destination"
              }
            },
            {
              "name": {
                "value": "Rabigh Saudi Arabia",
                "synonyms": [
                  "Rabigh",
                  "rabigh"
                ]
              }
            },
            {
              "name": {
                "value": "Abu Dhabi",
                "synonyms": [
                  "abu dhabi"
                ]
              }
            },
            {
              "name": {
                "value": "Al Quoz Industrial Area 3",
                "synonyms": [
                  "al quoz industrial area 3",
                  "Al Quoz industrial area 3"
                ]
              }
            },
            {
              "name": {
                "value": "Buraydah Saudi Arabia",
                "synonyms": [
                  "buraydah",
                  "Buraydah"
                ]
              }
            },
            {
              "name": {
                "value": "Tabuk Saudi Arabia",
                "synonyms": [
                  "tabuk",
                  "Tabuk"
                ]
              }
            },
            {
              "name": {
                "value": "Al Awir - Dubai - United Arab Emirates",
                "synonyms": [
                  "Al Awir",
                  "al awir",
                  "aweer"
                ]
              }
            },
            {
              "name": {
                "value": "Arar Saudi Arabia",
                "synonyms": [
                  "arar",
                  "Arar"
                ]
              }
            },
            {
              "name": {
                "value": "Madina Saudi Arabia",
                "synonyms": [
                  "madina"
                ]
              }
            },
            {
              "name": {
                "value": "Sur, Oman",
                "synonyms": [
                  "Sur",
                  "sur"
                ]
              }
            },
            {
              "name": {
                "value": "Kuwait City, Kuwait",
                "synonyms": [
                  "Kuwait City",
                  "Kuwait",
                  "kuwait city"
                ]
              }
            },
            {
              "name": {
                "value": "Zarqa, Jordan",
                "synonyms": [
                  "Zarqa",
                  "zarqa"
                ]
              }
            },
            {
              "name": {
                "value": "Dubai World Central - Dubai - United Arab Emirates",
                "synonyms": [
                  "DWC",
                  "dubai world central"
                ]
              }
            },
            {
              "name": {
                "value": "Khamis Mushait Saudi Arabia",
                "synonyms": [
                  "Khamis Mushait",
                  "khamis mushait"
                ]
              }
            },
            {
              "name": {
                "value": "Seeb, Oman",
                "synonyms": [
                  "seeb",
                  "Seeb"
                ]
              }
            },
            {
              "name": {
                "value": "Al Quoz - Dubai - United Arab Emirates",
                "synonyms": [
                  "al quoz"
                ]
              }
            },
            {
              "name": {
                "value": "Duqm, Oman",
                "synonyms": [
                  "Duqm",
                  "duqm"
                ]
              }
            },
            {
              "name": {
                "value": "Ruwais - Abu Dhabi - United Arab Emirates",
                "synonyms": [
                  "Ruwais",
                  "ruwais",
                  "Abu Dhabi Ruwais"
                ]
              }
            },
            {
              "name": {
                "value": "Al Quoz 1",
                "synonyms": [
                  "Al quoz",
                  "Al quoz 1",
                  "al quoz 1",
                  "al quoz",
                  "Al quoz one",
                  "al quoz one",
                  "Al Quoz One",
                  "Al Quoz one"
                ]
              }
            },
            {
              "name": {
                "value": "Abha Saudi Arabia",
                "synonyms": [
                  "abha",
                  "Abha"
                ]
              }
            },
            {
              "name": {
                "value": "Izki, Oman",
                "synonyms": [
                  "Izki",
                  "izki"
                ]
              }
            },
            {
              "name": {
                "value": "Sohar, Oman",
                "synonyms": [
                  "Sohar",
                  "sohar"
                ]
              }
            },
            {
              "name": {
                "value": "Al Khaburah, Oman",
                "synonyms": [
                  "al khaburah",
                  "Al Khaburah",
                  "alkhaburah"
                ]
              }
            },
            {
              "name": {
                "value": "Mina Zayed - Abu Dhabi - United Arab Emirates",
                "synonyms": [
                  "Mina Zayed",
                  "mina zayed",
                  "abu dhabi mina",
                  "Abu Dhabi Mina"
                ]
              }
            },
            {
              "name": {
                "value": "Nizwa, Oman",
                "synonyms": [
                  "Nizwa",
                  "nizwa"
                ]
              }
            },
            {
              "name": {
                "value": "Dubai Industrial City - Dubai - United Arab Emirates",
                "synonyms": [
                  "DIC",
                  "dubai industrial city",
                  "dubai industrial"
                ]
              }
            },
            {
              "name": {
                "value": "Taif Saudi Arabia",
                "synonyms": [
                  "Taif",
                  "taif"
                ]
              }
            },
            {
              "name": {
                "value": "Mafraq, Jordan",
                "synonyms": [
                  "Mafraq",
                  "mafraq"
                ]
              }
            },
            {
              "name": {
                "value": "Jebel Ali Free Zone (Jafza) - Dubai - United Arab Emirates",
                "synonyms": [
                  "Jebel ali north",
                  "jebel ali north"
                ]
              }
            },
            {
              "name": {
                "value": "Yanbu Saudi Arabia",
                "synonyms": [
                  "yanbu",
                  "Yanbu"
                ]
              }
            },
            {
              "name": {
                "value": "Salalah, Oman",
                "synonyms": [
                  "Salalah",
                  "salalah"
                ]
              }
            },
            {
              "name": {
                "value": "Dafza - Dubai - United Arab Emirates",
                "synonyms": [
                  "dafza",
                  "Dafza"
                ]
              }
            },
            {
              "name": {
                "value": "Dubai Investments Park - Dubai - United Arab Emirates",
                "synonyms": [
                  "DIP",
                  "Dubai investement park",
                  "dubai investment park"
                ]
              }
            },
            {
              "name": {
                "value": "Ras Al Khor - Dubai - United Arab Emirates",
                "synonyms": [
                  "ras al khor"
                ]
              }
            },
            {
              "name": {
                "value": "Rakia - Ras al Khaimah - United Arab Emirates"
              }
            },
            {
              "name": {
                "value": "Ras al Khaimah - United Arab Emirates",
                "synonyms": [
                  "Ras Al Khaimah 119"
                ]
              }
            },
            {
              "name": {
                "value": "Al Rashidiya - Dubai - United Arab Emirates",
                "synonyms": [
                  "Al Rashidiya",
                  "rashidiya",
                  "Rashidiya"
                ]
              }
            },
            {
              "name": {
                "value": "RAK Maritime City - Ras Al-Khaimah - United Arab Emirates",
                "synonyms": [
                  "RAK Maritime City",
                  "ras al khaimah saqr port"
                ]
              }
            },
            {
              "name": {
                "value": "Sajaa Industrial Area - Sharjah - United Arab Emirates",
                "synonyms": [
                  "sajja industrial area"
                ]
              }
            },
            {
              "name": {
                "value": "Industrial Area - Sharjah - United Arab Emirates",
                "synonyms": [
                  "sharjah industrial area"
                ]
              }
            },
            {
              "name": {
                "value": "Umm Al Quawain - United Arab Emirates",
                "synonyms": [
                  "umm al quwain"
                ]
              }
            }
          ]
        },
        {
          "name": "BIDDING",
          "values": [
            {
              "id": "Bidding",
              "name": {
                "value": "Bidding",
                "synonyms": [
                  "Bid"
                ]
              }
            }
          ]
        },
        {
          "name": "ORDERID",
          "values": [
            {
              "name": {
                "value": "@ORD:ORD @sys.number-integer:sys.number-integer"
              }
            }
          ]
        },
        {
          "name": "COMMODITY",
          "values": [
            {
              "id": "Steel",
              "name": {
                "value": "Steel",
                "synonyms": [
                  "steel"
                ]
              }
            },
            {
              "id": "commodity",
              "name": {
                "value": "$commodity"
              }
            }
          ]
        },
        {
          "name": "SHIPPER_INDUSTRY",
          "values": [
            {
              "name": {
                "value": "Apparels & Accessories"
              }
            },
            {
              "name": {
                "value": "Frozen Products"
              }
            },
            {
              "name": {
                "value": "Oil and Gas"
              }
            },
            {
              "name": {
                "value": "Electronics and Technology"
              }
            },
            {
              "name": {
                "value": "FMCG"
              }
            },
            {
              "name": {
                "value": "Freight Forwarding"
              }
            },
            {
              "name": {
                "value": "SMEs"
              }
            },
            {
              "name": {
                "value": "E- Commerce"
              }
            }
          ]
        }
      ]
    }
  }
};

app.listen(port);

console.log('Alexa list RESTful API server started on: ' + port);
