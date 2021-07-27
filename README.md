Fork of wekan:meteor-accounts-cas for RadGrad. Supports Meteor 2.3.2
===================

CAS login support.

## Usage

put CAS settings in Meteor.settings (for exemple using METEOR_SETTINGS env or --settings) like so:
## Usage

Put CAS settings in Meteor.settings (for example using METEOR_SETTINGS env or --settings) like so:

If casVersion is not defined, it will assume you use CAS 1.0. (note by xaionaro: option `casVersion` seems to be just ignored in the code, ATM).

Server side settings:

```
Meteor.settings = {
    "cas": {
        "baseUrl": "https://cas.example.com/cas",
        "autoClose": true,
        "validateUrl":"https://cas.example.com/cas/serviceValidate",
        "casVersion": 2.0,
        "attributes": {
            "debug" : true
        }
    },
}
```

CAS `attributes` settings :

* `attributes`: by default `{}` : all default values below will apply
* *  `debug` : by default `false` ; `true` will print to the server console the CAS attribute names to map, the CAS attributes values retrieved, if necessary the new user account created, and finally the user to use
* *  `id` : by default, the CAS user is used for the user account, but you can specified another CAS attribute
* *  `firstname` : by default `cas:givenName` ; but you can use your own CAS attribute
* *  `lastname` : by default `cas:sn` (respectively) ; but you can use your own CAS attribute
* *  `fullname` : by default unused, but if you specify your own CAS attribute, it will be used instead of the `firstname` + `lastname`
* *  `mail` : by default `cas:mail`

Client side settings:

```
Meteor.settings = {
	"public": {
		"cas": {
			"loginUrl": "https://cas.example.com/login",
			"serviceParam": "service",
			"popupWidth": 810,
			"popupHeight": 610,
			"popup": true,
		}
	}
}
```
Then, to start authentication, you have to call the following method from the client (for example in a click handler) :

```
Meteor.loginWithCas([callback]);
```

It must open a popup containing you CAS login from. The popup will be close immediately if you are already logged with your CAS server.
