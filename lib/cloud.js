(function() {
  /*
   * @class A Request object that is passed into the afterDelete function.
   * <strong>Available in Cloud Code only.</strong>
   * @property {AV.Object} object The object that was deleted.
   * @property {AV.User} user If set, the user that made the request.
   */
   AV.Cloud.AfterDeleteRequest = function(){};

  /**
   * @class A Request object that is passed into the afterSave function.
   * <strong>Available in Cloud Code only.</strong>
   * @property {AV.Object} object The object that was saved.
   * @property {AV.User} user If set, the user that made the request.
   */
   AV.Cloud.AfterSaveRequest = function(){};

  /**
   * @class A Request object that is passed into the beforeSave function.
   * <strong>Available in Cloud Code only.</strong>
   * @property {AV.Object} object The object that is being saved.
   * @property {AV.User} user If set, the user that made the request.
   */
   AV.Cloud.BeforeSaveRequest = function(){};

  /**
   * @class A Request object that is passed into the beforeDelete function.
   * <strong>Available in Cloud Code only.</strong>
   * @property {AV.Object} object The object that is being deleted.
   * @property {AV.User} user If set, the user that made the request.
   */
   AV.Cloud.BeforeDeleteRequest = function(){};

  /**
   * @class A Request object that is passed into the afterUpdate function.
   * <strong>Available in Cloud Code only.</strong>
   * @property {AV.Object} object The object that was updated.
   * @property {AV.User} user If set, the user that made the request.
   */
   AV.Cloud.AfterUpdateRequest = function(){};

  /**
   * Define a timer will wait a specified number of seconds, and
   * then execute a specified function, and it will continue to execute the function,
   * once at every given time-interval. <br/>
   * <strong>Available in Cloud Code only.</strong>
   * For example:
   * <pre> <code>
   *       //Log every second.
   *       AV.Cloud.setInterval("timer1", 1, function(){
   *           consooe.log("timer1 log");
   *       });
   * </code></pre>
   * @param name The timer's unique identifier.
   * @param interval The length of the time-intervals between each execution in seconds.
   * @param func The function to be executed.
   */
   AV.Cloud.setInterval = function(name, interval, func) {};

  /**
   * Define a timer that will execute by the crontab-like expression.<br/>
   * <strong>Available in Cloud Code only.</strong>
   * <pre> <code>
   *       //Log at 1:00 AM everyday.
   *       AV.Cloud.cronJob("timer1", "0 1 * * * ?", function(){
   *           consooe.log("timer1 log");
   *       });
   * </code></pre>
   * @param name The timer's unique identifier.
   * @param cron The crontab-like string in the form of 'sec min hour dayOfMonth month dayOfWeek [year]'.
   * @param func The function to be executed.
   */
   AV.Cloud.cronJob = function(name, cron, func) {};


  /**
   * @class A Response object that is passed to the beforeSave function. This object contains functions to tell the AV.Cloud what to do with the save.
   * <strong>Available in Cloud Code only.</strong>
   * @property {Function} success If called, will allow the save to happen. If a AV.Object is passed in, then the passed in object will be saved instead.
   * @property {Function} error If called, will reject the save. An optional error message may be passed in.
   */
   AV.Cloud.BeforeSaveResponse = function(){};

  /**
   * @class A Response object that is passed to the beforeDelete function. This object contains functions to tell the AV.Cloud what to do with the delete.
   * <strong>Available in Cloud Code only.</strong>
   * @property {Function} success If called, will allow the delete to happen. If a AV.Object is passed in, then the passed in object will be deleted instead.
   * @property {Function} error If called, will reject the delete. An optional error message may be passed in.
   */
   AV.Cloud.BeforeDeleteResponse = function(){};

   /**
    * @class A Request object that is passed into a cloud function.
    * <strong>Available in Cloud Code only.</strong>
    * @property {Object} params The params passed to the cloud function
    * @property {AV.User} user If set, the user that made the request.
    */
   AV.Cloud.FunctionRequest = function(){};

   /**
    * @class A Response object that is passed to a cloud function. This object contains functions to tell the AV.Cloud what to do with the save.
    * <strong>Available in Cloud Code only.</strong>
    * @property {Function} success If success is called, will return a successful response with the optional argument to the caller.
    * @property {Function} error f error is called, will return an error response with an optionally passed message.
    */
   AV.Cloud.FunctionResponse = function(){};

   /**
    * Registers a before save function.
    * <br/><strong>Available in Cloud Code only</strong>.
    * <code><pre>
   AV.Cloud.beforeSave('MyCustomClass', function(request, response) {
   // code here
 })

 AV.Cloud.beforeSave(AV.User, function(request, response) {
   // code here
 })
    * </pre></code>
    * @param {Class} name The AV.Object subclass to register the before save function for. This can instead be a String that is the className of the subclass.
    * @param {Function} func The function to run before a save. This function should take two parameters a AV.Cloud.BeforeSaveRequest and a AV.Cloud.BeforeSaveResponse.
    */
   AV.Cloud.beforeSave = function(name, func){};

   /**
    * Registers an after save function.
    * <br/><strong>Available in Cloud Code only</strong>.
    * <code><pre>
 AV.Cloud.afterSave('MyCustomClass', function(request) {
     // code here
    })

 AV.Cloud.afterSave(AV.User, function(request) {
   // code here
 })
    * </pre></code>
    * @param {Class} name The AV.Object subclass to register the after save function for. This can instead be a String that is the className of the subclass.
    * @param {Function} func The function to run after a save. This function should take just one parameter AV.Cloud.AfterSaveRequest.
    */
   AV.Cloud.afterSave = function(name, func){};


   /**
    * Registers an after update function.
    * <br/><strong>Available in Cloud Code only</strong>.
    * <code><pre>
 AV.Cloud.afterUpdate('MyCustomClass', function(request) {
     // code here
    })

 AV.Cloud.afterUpdate(AV.User, function(request) {
   // code here
 })
    * </pre></code>
    * @param {Class} name The AV.Object subclass to register the after update function for. This can instead be a String that is the className of the subclass.
    * @param {Function} func The function to run after a update. This function should take just one parameter AV.Cloud.AfterUpdateRequest.
    */
   AV.Cloud.afterUpdate = function(name, func){};


   /**
    * Registers a before delete function.
    * <br/><strong>Available in Cloud Code only</strong>.
    * If you want use beforeDelete for a predefined class in the AV JavaScript SDK (e.g. AV.User), you should pass the class itself and not the String for arg1.
    * <code><pre>
 AV.Cloud.beforeDelete('MyCustomClass', function(request, response) {
    // code here
  })

  AV.Cloud.beforeDelete(AV.User, function(request, response) {
    // code here
  })
    * </pre></code>
    * @param {Class} arg1 The AV.Object subclass to register the before delete function for. This can instead be a String that is the className of the subclass.
    * @param {Function} func The function to run before a delete. This function should take two parameters a AV.Cloud.BeforeDeleteRequest and a AV.Cloud.BeforeDeleteResponse
    */
   AV.Cloud.beforeDelete = function(name, func){};

   /**
    * Registers an after delete function.
    * <br/><strong>Available in Cloud Code only</strong>.
    * If you want to use afterDelete for a predefined class in the AV JavaScript SDK (e.g. AV.User), you should pass the class itself and not the String for arg1.
    * <code><pre>
 AV.Cloud.afterDelete('MyCustomClass', function(request) {
    // code here
  })

  AV.Cloud.afterDelete(AV.User, function(request) {
    // code here
  })
    * </pre></code>
    * @param {Class} arg1 The AV.Object subclass to register the before save function for. This can instead be a String that is the className of the subclass.
    * @param {Function} func The function to run before a save. This function should take just one parameter, AV.Cloud.AfterDeleteRequest.
    */
   AV.Cloud.afterDelete = function(name, func){};

   /**
    * Makes an HTTP Request.
    * <br/><strong>Available in Cloud Code only</strong>.
    * @param {Object} The options objects that makes the request.
    * @return {AV.Promise}  A promise that will be resolved with a AV.Cloud.HTTPResponse object when the request completes.
    */
   AV.Cloud.httpRequest = function(options) {};
})()
