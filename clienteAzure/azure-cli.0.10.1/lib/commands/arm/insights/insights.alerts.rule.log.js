/*** Generated by streamline 0.10.17 (callbacks) - DO NOT EDIT ***/ "use strict"; var __rt=require('streamline/lib/callbacks/runtime').runtime(__filename, false),__func=__rt.__func,__cb=__rt.__cb,__tryCatch=__rt.__tryCatch; var __ = require("underscore");

















var util = require("util");
var utils = require("../../../util/utils");
var insightsUtils = require("./insights.utils");

var $ = utils.getLocaleString;

exports.init = function(cli) {
  var log = cli.output;
  var insightsLogAlertsRulesCommand = cli.category("insights").category("alerts").category("rule").category("log").description($("Creates event-based alerts rules"));



  insightsLogAlertsRulesCommand.command("set <ruleName> <location> <resourceGroup> <operationName>").description($("Create or set an event-based alert rule.")).usage("[options] <ruleName> <location> <resourceGroup> <operationName>").option("-x --disable", $("Flag to disable the rule.")).option("-s --subscription <subscription>", $("The subscription identifier.")).option("-n --ruleName <ruleName>", $("The name of the rule.")).option("-d --description <description>", $("The description of the rule.")).option("-l --location <location>", $("The location.")).option("-g --resourceGroup <resourceGroup>", $("The resource group.")).option("-p --operationName <operationName>", $("The operation name.")).option("-z --actions <actions>", $("The list of alert rule actions. The list must be a json object (string) of an array. Example: \"[{\\\"customEmails\\\":[\\\"gu@ms.com\\\"]},{\\\"serviceUri\\\":\\\"http://foo.com\\\",\\\"properties\\\":[{\\\"key\\\":\\\"key1\\\",\\\"value\\\":\\\"value1\\\"},{\\\"key\\\":\\\"value1\\\",\\\"value\\\":\\\"key2\\\"}]}]")).option("-i --targetResourceId <targetResourceId>", $("The target resource Id.")).option("-k --targetResourceProvider <targetResourceProvider>", $("The target resource provider.")).option("-z --targetResourceGroup <targetResourceGroup>", $("The target resource group.")).option("-f --level <level>", $("The level for the rule.")).option("-u --status <status>", $("The status.")).option("-b --subStatus <subStatus>", $("The substatus.")).execute(function __1(ruleName, location, resourceGroup, operationName, options, _) { var __frame = { name: "__1", line: 55 }; return __func(_, this, arguments, __1, 5, __frame, function __$__1() {
























      return insightsLogAlertsRulesCommand._prepareAndExecuteSet(ruleName, location, resourceGroup, operationName, options, __cb(_, __frame, 1, 36, function __$__1() { _(); }, true)); }); });



  insightsLogAlertsRulesCommand._prepareAndExecuteSet = function insightsLogAlertsRulesCommand__prepareAndExecuteSet__2(ruleName, location, resourceGroup, operationName, options, _) { var client, parameters, __this = this; var __frame = { name: "insightsLogAlertsRulesCommand__prepareAndExecuteSet__2", line: 60 }; return __func(_, this, arguments, insightsLogAlertsRulesCommand__prepareAndExecuteSet__2, 5, __frame, function __$insightsLogAlertsRulesCommand__prepareAndExecuteSet__2() {
      log.silly(util.format("ruleName: %s", ruleName));
      log.silly(util.format("location: %s", location));
      log.silly(util.format("resourceGroup: %s", resourceGroup));
      log.silly(util.format("operationName: %s", operationName));
      log.silly(util.format("options: %s", util.inspect(options)));

      if (!__.isString(ruleName)) {
        cli.missingArgument("ruleName"); } ;


      if (!__.isString(location)) {
        cli.missingArgument("location"); } ;


      if (!__.isString(resourceGroup)) {
        cli.missingArgument("resourceGroup"); } ;


      if (!__.isString(operationName)) {
        cli.missingArgument("operationName"); } ;


      client = insightsUtils.createInsightsManagementClient(log, options);
      parameters = __this._createSdkCallParameters(ruleName, location, operationName, options);

      return __this._executeSetCmd(client, ruleName, resourceGroup, parameters, options, __cb(_, __frame, 26, 9, function __$insightsLogAlertsRulesCommand__prepareAndExecuteSet__2() { _(); }, true)); }); };


  insightsLogAlertsRulesCommand._createEventRuleCondition = function(operationName, options) {
    if (!__.isString(operationName)) {
      cli.missingArgument("operationName"); } ;


    return {
      dataSource: {
        level: options.level,
        operationName: operationName,
        resourceGroupName: options.targetResourceGroup,
        resourceProviderName: options.targetResourceProvider,
        resourceUri: options.targetResourceId,
        status: options.status,
        subStatus: options.subStatus,
        type: "Microsoft.Azure.Management.Insights.Models.RuleManagementEventDataSource" },

      type: "Microsoft.Azure.Management.Insights.Models.ManagementEventRuleCondition" }; };



  insightsLogAlertsRulesCommand._createSdkCallParameters = function(ruleName, location, operationName, options) {
    var internalActions = [];
    if ((!__.isUndefined(options.actions) && !__.isNull(options.actions))) {
      internalActions = JSON.parse(options.actions);
      log.silly(util.format("Parsed actions: %s", util.inspect(internalActions)));
      if (!__.isArray(internalActions)) {
        throw new Error($("Invalid actions argument: array expected.")); } ; } ;



    var condition = this._createEventRuleCondition(operationName, options);
    var parameters = {
      location: location,
      properties: {
        name: ruleName,
        isEnabled: !options.disabled,
        description: options.description,
        lastUpdatedTime: new Date(),
        condition: condition,
        actions: internalActions },

      tags: { } };


    if ((options.targetResourceId && (options.targetResourceId !== ""))) {
      parameters.tags["$type"] = "Microsoft.WindowsAzure.Management.Common.Storage.CasePreservedDictionary,Microsoft.WindowsAzure.Management.Common.Storage";
      parameters.tags[("hidden-link:" + options.targetResourceId)] = "Resource"; } ;


    return parameters; };


  insightsLogAlertsRulesCommand._executeSetCmd = function insightsLogAlertsRulesCommand__executeSetCmd__3(client, ruleName, resourceGroup, parameters, options, _) { var progress, response; var __frame = { name: "insightsLogAlertsRulesCommand__executeSetCmd__3", line: 141 }; return __func(_, this, arguments, insightsLogAlertsRulesCommand__executeSetCmd__3, 5, __frame, function __$insightsLogAlertsRulesCommand__executeSetCmd__3() {
      progress = cli.interaction.progress(util.format($("Creating or updating a log alert rule \"%s\""), ruleName));
      response = null; return (function ___(__then) { (function ___(_) { __tryCatch(_, function __$insightsLogAlertsRulesCommand__executeSetCmd__3() {

            return client.alertOperations.createOrUpdateRule(resourceGroup, parameters, __cb(_, __frame, 4, 40, function ___(__0, __1) { response = __1;


              log.silly((!response ? util.inspect(response) : "nothing in response")); _(null, null, true); }, true)); }); })(function ___(__e, __r, __cont) { (function ___(__then) { __tryCatch(_, function __$insightsLogAlertsRulesCommand__executeSetCmd__3() {

              progress.end(); __then(); }); })(function ___() { __tryCatch(_, function ___() { if (__cont) { __then(); } else { _(__e, __r); }; }); }); }); })(function ___() { __tryCatch(_, function __$insightsLogAlertsRulesCommand__executeSetCmd__3() {


          insightsUtils.formatOutput(cli, log, options, response); _(); }); }); }); };};