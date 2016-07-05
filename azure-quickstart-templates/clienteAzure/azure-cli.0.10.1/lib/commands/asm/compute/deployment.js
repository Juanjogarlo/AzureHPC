/*** Generated by streamline 0.10.17 (callbacks) - DO NOT EDIT ***/ "use strict"; var __rt=require('streamline/lib/callbacks/runtime').runtime(__filename, false),__func=__rt.__func,__cb=__rt.__cb; var fs = require("fs");



























































var profile = require("../../../util/profile");
var utils = require("../../../util/utils");

var $ = utils.getLocaleString;exports.init = function(cli) {






  var deploymentAbortMigration = cli.category("service").description("Commands to invoke service management operations.").category("deployment").description($("Commands to manage your deployment.  "));

  deploymentAbortMigration.command("abort-migration [service-name] [name]").description($("The Abort Deployment Operation validates and aborts your deployment for IaaS Classic to ARM migration.")).usage("[options] <service-name> <name>").option("--service-name <service-name>", $("service-name")).option("-n, --name <name>", $("name")).option("-s, --subscription <subscription>", $("The subscription identifier")).execute(function __1(serviceName, name, options, _) { var subscription, computeManagementClient, result; var __frame = { name: "__1", line: 79 }; return __func(_, this, arguments, __1, 3, __frame, function __$__1() { return (function __$__1(__then) {






        if (!serviceName) {
          return cli.interaction.promptIfNotGiven($("service-name : "), serviceName, __cb(_, __frame, 2, 36, function ___(__0, __1) { serviceName = __1; __then(); }, true)); } else { __then(); } ; })(function __$__1() {


        cli.output.verbose(("serviceName = " + serviceName)); return (function __$__1(__then) {
          if (!name) {
            return cli.interaction.promptIfNotGiven($("name : "), name, __cb(_, __frame, 7, 29, function ___(__0, __2) { name = __2; __then(); }, true)); } else { __then(); } ; })(function __$__1() {


          cli.output.verbose(("name = " + name));
          subscription = profile.current.getSubscription(options.subscription);
          computeManagementClient = utils.createComputeClient(subscription);
          return computeManagementClient.deployments.abortMigration(serviceName, name, __cb(_, __frame, 13, 53, function ___(__0, __3) { result = __3;
            if (result) {
              cli.output.json(result); } ; _(); }, true)); }); }); }); });







  var deploymentCommitMigration = cli.category("service").description("Commands to invoke service management operations.").category("deployment").description($("Commands to manage your deployment.  "));

  deploymentCommitMigration.command("commit-migration [service-name] [name]").description($("The Commit Deployment Operation validates and commits your deployment for IaaS Classic to ARM migration.")).usage("[options] <service-name> <name>").option("--service-name <service-name>", $("service-name")).option("-n, --name <name>", $("name")).option("-s, --subscription <subscription>", $("The subscription identifier")).execute(function __2(serviceName, name, options, _) { var subscription, computeManagementClient, result; var __frame = { name: "__2", line: 110 }; return __func(_, this, arguments, __2, 3, __frame, function __$__2() { return (function __$__2(__then) {






        if (!serviceName) {
          return cli.interaction.promptIfNotGiven($("service-name : "), serviceName, __cb(_, __frame, 2, 36, function ___(__0, __1) { serviceName = __1; __then(); }, true)); } else { __then(); } ; })(function __$__2() {


        cli.output.verbose(("serviceName = " + serviceName)); return (function __$__2(__then) {
          if (!name) {
            return cli.interaction.promptIfNotGiven($("name : "), name, __cb(_, __frame, 7, 29, function ___(__0, __2) { name = __2; __then(); }, true)); } else { __then(); } ; })(function __$__2() {


          cli.output.verbose(("name = " + name));
          subscription = profile.current.getSubscription(options.subscription);
          computeManagementClient = utils.createComputeClient(subscription);
          return computeManagementClient.deployments.commitMigration(serviceName, name, __cb(_, __frame, 13, 53, function ___(__0, __3) { result = __3;
            if (result) {
              cli.output.json(result); } ; _(); }, true)); }); }); }); });















  var deploymentPrepareMigration = cli.category("service").description("Commands to invoke service management operations.").category("deployment").description($("Commands to manage your deployment.  "));

  deploymentPrepareMigration.command("prepare-migration [service-name] [name] [destination-virtual-network] [resource-group-name] [subnet-name] [virtual-network-name]").description($("The Prepare Deployment Operation validates and prepares your deployment for IaaS Classic to ARM migration.")).usage("[options] <service-name> <name> <destination-virtual-network> <resource-group-name> <subnet-name> <virtual-network-name>").option("--service-name <service-name>", $("service-name")).option("-n, --name <name>", $("name")).option("--destination-virtual-network <destination-virtual-network>", $("destination-virtual-network")).option("-g, --resource-group-name <resource-group-name>", $("resource-group-name")).option("--subnet-name <subnet-name>", $("subnet-name")).option("--virtual-network-name <virtual-network-name>", $("virtual-network-name")).option("-s, --subscription <subscription>", $("The subscription identifier")).execute(function __3(serviceName, name, destinationVirtualNetwork, resourceGroupName, subNetName, virtualNetworkName, options, _) { var parametersObj, parametersFileContent, subscription, computeManagementClient, result; var __frame = { name: "__3", line: 153 }; return __func(_, this, arguments, __3, 7, __frame, function __$__3() { return (function __$__3(__then) {










        if (!serviceName) {
          return cli.interaction.promptIfNotGiven($("service-name : "), serviceName, __cb(_, __frame, 2, 36, function ___(__0, __1) { serviceName = __1; __then(); }, true)); } else { __then(); } ; })(function __$__3() {


        cli.output.verbose(("serviceName = " + serviceName)); return (function __$__3(__then) {
          if (!name) {
            return cli.interaction.promptIfNotGiven($("name : "), name, __cb(_, __frame, 7, 29, function ___(__0, __2) { name = __2; __then(); }, true)); } else { __then(); } ; })(function __$__3() {


          cli.output.verbose(("name = " + name));
          parametersObj = null;
          if (options.parameterFile) {
            cli.output.verbose((("Reading file content from: \"" + options.parameterFile) + "\""));
            parametersFileContent = fs.readFileSync(options.parameterFile, "utf8");
            parametersObj = JSON.parse(parametersFileContent); }

           else {
            parametersObj = { };
            cli.output.verbose(("destinationVirtualNetwork = " + destinationVirtualNetwork));
            parametersObj.destinationVirtualNetwork = destinationVirtualNetwork;
            cli.output.verbose(("resourceGroupName = " + resourceGroupName));
            parametersObj.resourceGroupName = resourceGroupName;
            cli.output.verbose(("subNetName = " + subNetName));
            parametersObj.subNetName = subNetName;
            cli.output.verbose(("virtualNetworkName = " + virtualNetworkName));
            parametersObj.virtualNetworkName = virtualNetworkName; } ;

          cli.output.verbose(("parametersObj = " + JSON.stringify(parametersObj)));
          subscription = profile.current.getSubscription(options.subscription);
          computeManagementClient = utils.createComputeClient(subscription);
          return computeManagementClient.deployments.prepareMigration(serviceName, name, parametersObj, __cb(_, __frame, 31, 53, function ___(__0, __3) { result = __3;
            if (result) {
              cli.output.json(result); } ; _(); }, true)); }); }); }); });};