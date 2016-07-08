/*** Generated by streamline 0.10.17 (callbacks) - DO NOT EDIT ***/ var __rt=require('streamline/lib/callbacks/runtime').runtime(__filename, false),__func=__rt.__func,__cb=__rt.__cb,__catch=__rt.__catch,__tryCatch=__rt.__tryCatch; var __ = require("underscore");















var util = require("util");

var utils = require("../../../util/utils");
var $ = utils.getLocaleString;

function VirtualMachine(cli, serviceClients, resourceGroupName, params) {
  this.cli = cli;
  this.serviceClients = serviceClients;
  this.resourceGroupName = resourceGroupName;
  this.params = params;};


__.extend(VirtualMachine.prototype, {
  getVMByIdExpanded: function getVMByIdExpanded__1(referenceUri, depth, memoize, dependencies, _) { var resourceInfo, expandedVM, __this = this; var __frame = { name: "getVMByIdExpanded__1", line: 30 }; return __func(_, this, arguments, getVMByIdExpanded__1, 4, __frame, function __$getVMByIdExpanded__1() {
      referenceUri = referenceUri.toLowerCase();
      if (memoize[referenceUri]) {
        return _(null, memoize[referenceUri]); } ;


      resourceInfo = utils.parseResourceReferenceUri(referenceUri);
      return __this.getVMByNameExpanded(resourceInfo.resourceGroupName, resourceInfo.resourceName, depth, memoize, dependencies, __cb(_, __frame, 7, 26, function ___(__0, __1) { expandedVM = __1;
        return _(null, expandedVM); }, true)); }); },


  getVMByNameExpanded: function getVMByNameExpanded__2(resourceGroupName, vmName, depth, memoize, dependencies, _) { var vm, expandedVM, __this = this; var __frame = { name: "getVMByNameExpanded__2", line: 41 }; return __func(_, this, arguments, getVMByNameExpanded__2, 5, __frame, function __$getVMByNameExpanded__2() {
      return __this.getVM(resourceGroupName, vmName, __cb(_, __frame, 1, 18, function ___(__0, __1) { vm = __1;
        return __this._expandVM(vm, depth, memoize, dependencies, __cb(_, __frame, 2, 26, function ___(__0, __2) { expandedVM = __2;
          return _(null, expandedVM); }, true)); }, true)); }); },


  getVMById: function getVMById__3(referenceUri, _) { var resourceInfo, __this = this; var __frame = { name: "getVMById__3", line: 47 }; return __func(_, this, arguments, getVMById__3, 1, __frame, function __$getVMById__3() {
      resourceInfo = utils.parseResourceReferenceUri(referenceUri);
      return __this.getVM(resourceInfo.resourceGroupName, resourceInfo.resourceName, __cb(_, __frame, 2, 16, _, true)); }); },


  getVM: function getVM__4(resourceGroupName, vmName, _) { var progress, virtualMachine, __this = this; var __frame = { name: "getVM__4", line: 52 }; return __func(_, this, arguments, getVM__4, 2, __frame, function __$getVM__4() {
      progress = __this.cli.interaction.progress(util.format($("Looking up the VM \"%s\""), vmName)); return (function ___(__then) { (function ___(_) { __tryCatch(_, function __$getVM__4() { return (function ___(__then) { (function ___(_) { __tryCatch(_, function __$getVM__4() {

                  return __this.serviceClients.computeManagementClient.virtualMachines.get(resourceGroupName, vmName, __cb(_, __frame, 3, 87, function ___(__0, __1) { virtualMachine = __1;
                    return _(null, virtualMachine); }, true)); }); })(function ___(e, __result) { __catch(function __$getVM__4() { if (e) {

                    if (((e.code === "ResourceNotFound") || (e.code === "NotFound"))) {
                      return _(null, null); } ;

                    return _(e); } else { _(null, __result); } ; }, _); }); })(function ___() { __tryCatch(_, function __$getVM__4() { _(null, null, true); }); }); }); })(function ___(__e, __r, __cont) { (function ___(__then) { __tryCatch(_, function __$getVM__4() {

              progress.end(); __then(); }); })(function ___() { __tryCatch(_, function ___() { if (__cont) { __then(); } else { _(__e, __r); }; }); }); }); })(function ___() { __tryCatch(_, function __$getVM__4() { _(); }); }); }); },



  getVMList: function getVMList__5(resourceGroupName, _) { var vms, i, vm, progress, resourceInfo, __this = this; var __frame = { name: "getVMList__5", line: 67 }; return __func(_, this, arguments, getVMList__5, 1, __frame, function __$getVMList__5() {



      progress = __this.cli.interaction.progress($("Getting virtual machines")); return (function ___(__then) { (function ___(_) { __tryCatch(_, function __$getVMList__5() { return (function __$getVMList__5(__then) {

              if (resourceGroupName) {
                return __this.serviceClients.computeManagementClient.virtualMachines.list(resourceGroupName, __cb(_, __frame, 7, 74, function ___(__0, __1) { vms = __1;
                  i = 0; var __7 = false; return (function ___(__break) { var __more; var __loop = __cb(_, __frame, 0, 0, function __$getVMList__5() { __more = false; if (__7) { i++; } else { __7 = true; } ; var __6 = (i < vms.length); if (__6) {
                        vm = vms[i];
                        vm.resourceGroupName = resourceGroupName;
                        return __this._getVMPowerState(resourceGroupName, vm.name, __cb(_, __frame, 11, 31, function ___(__0, __2) { vm.powerState = __2; while (__more) { __loop(); }; __more = true; }, true)); } else { __break(); } ; }); do { __loop(); } while (__more); __more = true; })(__then); }, true)); } else {



                return __this.serviceClients.computeManagementClient.virtualMachines.listAll(__cb(_, __frame, 15, 74, function ___(__0, __3) { vms = __3;
                  i = 0; var __11 = false; return (function ___(__break) { var __more; var __loop = __cb(_, __frame, 0, 0, function __$getVMList__5() { __more = false; if (__11) { i++; } else { __11 = true; } ; var __10 = (i < vms.length); if (__10) {
                        vm = vms[i];
                        resourceInfo = utils.parseResourceReferenceUri(vm.id);
                        vm.resourceGroupName = resourceInfo.resourceGroupName;
                        return __this._getVMPowerState(resourceInfo.resourceGroupName, vm.name, __cb(_, __frame, 20, 31, function ___(__0, __4) { vm.powerState = __4; while (__more) { __loop(); }; __more = true; }, true)); } else { __break(); } ; }); do { __loop(); } while (__more); __more = true; })(__then); }, true)); } ; })(function __$getVMList__5() { _(null, null, true); }); }); })(function ___(__e, __r, __cont) { (function ___(__then) { __tryCatch(_, function __$getVMList__5() {



              progress.end(); __then(); }); })(function ___() { __tryCatch(_, function ___() { if (__cont) { __then(); } else { _(__e, __r); }; }); }); }); })(function ___() { __tryCatch(_, function __$getVMList__5() {


          return _(null, vms); }); }); }); },


  deleteVM: function deleteVM__6(resourceGroupName, vmName, _) { var progress, __this = this; var __frame = { name: "deleteVM__6", line: 97 }; return __func(_, this, arguments, deleteVM__6, 2, __frame, function __$deleteVM__6() {
      progress = __this.cli.interaction.progress(util.format($("Deleting the virtual machine \"%s\""), vmName)); return (function ___(__then) { (function ___(_) { __tryCatch(_, function __$deleteVM__6() {

            return __this.serviceClients.computeManagementClient.virtualMachines.deleteMethod(resourceGroupName, vmName, __cb(_, __frame, 3, 66, function __$deleteVM__6() { _(null, null, true); }, true)); }); })(function ___(__e, __r, __cont) { (function ___(__then) { __tryCatch(_, function __$deleteVM__6() {

              progress.end(); __then(); }); })(function ___() { __tryCatch(_, function ___() { if (__cont) { __then(); } else { _(__e, __r); }; }); }); }); })(function ___() { __tryCatch(_, function __$deleteVM__6() { _(); }); }); }); },



  stopVM: function stopVM__7(resourceGroupName, vmName, _) { var progress, __this = this; var __frame = { name: "stopVM__7", line: 106 }; return __func(_, this, arguments, stopVM__7, 2, __frame, function __$stopVM__7() {
      progress = __this.cli.interaction.progress(util.format($("Stopping the virtual machine \"%s\""), vmName)); return (function ___(__then) { (function ___(_) { __tryCatch(_, function __$stopVM__7() {

            return __this.serviceClients.computeManagementClient.virtualMachines.powerOff(resourceGroupName, vmName, __cb(_, __frame, 3, 66, function __$stopVM__7() { _(null, null, true); }, true)); }); })(function ___(__e, __r, __cont) { (function ___(__then) { __tryCatch(_, function __$stopVM__7() {

              progress.end(); __then(); }); })(function ___() { __tryCatch(_, function ___() { if (__cont) { __then(); } else { _(__e, __r); }; }); }); }); })(function ___() { __tryCatch(_, function __$stopVM__7() { _(); }); }); }); },



  restartVM: function restartVM__8(resourceGroupName, vmName, _) { var progress, __this = this; var __frame = { name: "restartVM__8", line: 115 }; return __func(_, this, arguments, restartVM__8, 2, __frame, function __$restartVM__8() {
      progress = __this.cli.interaction.progress(util.format($("Restarting the virtual machine \"%s\""), vmName)); return (function ___(__then) { (function ___(_) { __tryCatch(_, function __$restartVM__8() {

            return __this.serviceClients.computeManagementClient.virtualMachines.restart(resourceGroupName, vmName, __cb(_, __frame, 3, 66, function __$restartVM__8() { _(null, null, true); }, true)); }); })(function ___(__e, __r, __cont) { (function ___(__then) { __tryCatch(_, function __$restartVM__8() {

              progress.end(); __then(); }); })(function ___() { __tryCatch(_, function ___() { if (__cont) { __then(); } else { _(__e, __r); }; }); }); }); })(function ___() { __tryCatch(_, function __$restartVM__8() { _(); }); }); }); },



  startVM: function startVM__9(resourceGroupName, vmName, _) { var progress, __this = this; var __frame = { name: "startVM__9", line: 124 }; return __func(_, this, arguments, startVM__9, 2, __frame, function __$startVM__9() {
      progress = __this.cli.interaction.progress(util.format($("Starting the virtual machine \"%s\""), vmName)); return (function ___(__then) { (function ___(_) { __tryCatch(_, function __$startVM__9() {

            return __this.serviceClients.computeManagementClient.virtualMachines.start(resourceGroupName, vmName, __cb(_, __frame, 3, 66, function __$startVM__9() { _(null, null, true); }, true)); }); })(function ___(__e, __r, __cont) { (function ___(__then) { __tryCatch(_, function __$startVM__9() {

              progress.end(); __then(); }); })(function ___() { __tryCatch(_, function ___() { if (__cont) { __then(); } else { _(__e, __r); }; }); }); }); })(function ___() { __tryCatch(_, function __$startVM__9() { _(); }); }); }); },



  deallocateVM: function deallocateVM__10(resourceGroupName, vmName, _) { var progress, __this = this; var __frame = { name: "deallocateVM__10", line: 133 }; return __func(_, this, arguments, deallocateVM__10, 2, __frame, function __$deallocateVM__10() {
      progress = __this.cli.interaction.progress(util.format($("Deallocating the virtual machine \"%s\""), vmName)); return (function ___(__then) { (function ___(_) { __tryCatch(_, function __$deallocateVM__10() {

            return __this.serviceClients.computeManagementClient.virtualMachines.deallocate(resourceGroupName, vmName, __cb(_, __frame, 3, 66, function __$deallocateVM__10() { _(null, null, true); }, true)); }); })(function ___(__e, __r, __cont) { (function ___(__then) { __tryCatch(_, function __$deallocateVM__10() {

              progress.end(); __then(); }); })(function ___() { __tryCatch(_, function ___() { if (__cont) { __then(); } else { _(__e, __r); }; }); }); }); })(function ___() { __tryCatch(_, function __$deallocateVM__10() { _(); }); }); }); },



  captureVM: function captureVM__11(resourceGroupName, vmName, params, _) { var progress, result, __this = this; var __frame = { name: "captureVM__11", line: 142 }; return __func(_, this, arguments, captureVM__11, 3, __frame, function __$captureVM__11() {
      progress = __this.cli.interaction.progress(util.format($("Capturing the virtual machine \"%s\""), vmName)); return (function ___(__then) { (function ___(_) { __tryCatch(_, function __$captureVM__11() {

            return __this.serviceClients.computeManagementClient.virtualMachines.capture(resourceGroupName, vmName, params, __cb(_, __frame, 3, 79, function ___(__0, __1) { result = __1;
              if (result.error) {
                return _(result.error); } ;

              return _(null, result); }, true)); }); })(function ___(__e, __r, __cont) { (function ___(__then) { __tryCatch(_, function __$captureVM__11() {

              progress.end(); __then(); }); })(function ___() { __tryCatch(_, function ___() { if (__cont) { __then(); } else { _(__e, __r); }; }); }); }); })(function ___() { __tryCatch(_, function __$captureVM__11() { _(); }); }); }); },



  generalizeVM: function generalizeVM__12(resourceGroupName, vmName, _) { var progress, __this = this; var __frame = { name: "generalizeVM__12", line: 155 }; return __func(_, this, arguments, generalizeVM__12, 2, __frame, function __$generalizeVM__12() {
      progress = __this.cli.interaction.progress(util.format($("Generalizing the virtual machine \"%s\""), vmName)); return (function ___(__then) { (function ___(_) { __tryCatch(_, function __$generalizeVM__12() {

            return __this.serviceClients.computeManagementClient.virtualMachines.generalize(resourceGroupName, vmName, __cb(_, __frame, 3, 66, function __$generalizeVM__12() { _(null, null, true); }, true)); }); })(function ___(__e, __r, __cont) { (function ___(__then) { __tryCatch(_, function __$generalizeVM__12() {

              progress.end(); __then(); }); })(function ___() { __tryCatch(_, function ___() { if (__cont) { __then(); } else { _(__e, __r); }; }); }); }); })(function ___() { __tryCatch(_, function __$generalizeVM__12() { _(); }); }); }); },



  getInstanceView: function getInstanceView__13(resourceGroupName, vmName, _) { var progress, getOptions, result, __this = this; var __frame = { name: "getInstanceView__13", line: 164 }; return __func(_, this, arguments, getInstanceView__13, 2, __frame, function __$getInstanceView__13() {
      progress = __this.cli.interaction.progress(util.format($("Getting instance view of virtual machine \"%s\""), vmName)); return (function ___(__then) { (function ___(_) { __tryCatch(_, function __$getInstanceView__13() { return (function ___(__then) { (function ___(_) { __tryCatch(_, function __$getInstanceView__13() {

                  getOptions = { expand: "instanceView" };
                  return __this.serviceClients.computeManagementClient.virtualMachines.get(resourceGroupName, vmName, getOptions, __cb(_, __frame, 4, 79, function ___(__0, __1) { result = __1;
                    return _(null, result); }, true)); }); })(function ___(e, __result) { __catch(function __$getInstanceView__13() { if (e) {

                    if ((e.code === "ResourceNotFound")) {
                      return _(null, null); } ;

                    return _(e); } else { _(null, __result); } ; }, _); }); })(function ___() { __tryCatch(_, function __$getInstanceView__13() { _(null, null, true); }); }); }); })(function ___(__e, __r, __cont) { (function ___(__then) { __tryCatch(_, function __$getInstanceView__13() {

              progress.end(); __then(); }); })(function ___() { __tryCatch(_, function ___() { if (__cont) { __then(); } else { _(__e, __r); }; }); }); }); })(function ___() { __tryCatch(_, function __$getInstanceView__13() { _(); }); }); }); },



  createOrUpdateVM: function createOrUpdateVM__14(resourceGroupName, virtualMachine, isNewVM, _) { var progressMessage, progress, vmResult, __this = this; var __frame = { name: "createOrUpdateVM__14", line: 180 }; return __func(_, this, arguments, createOrUpdateVM__14, 3, __frame, function __$createOrUpdateVM__14() {
      progressMessage = util.format($("%s VM \"%s\""), ((isNewVM ? "Creating" : "Updating")), virtualMachine.name);
      progress = __this.cli.interaction.progress(progressMessage); return (function ___(__then) { (function ___(_) { __tryCatch(_, function __$createOrUpdateVM__14() {

            if (!isNewVM) {


              if (virtualMachine.resources) {
                delete virtualMachine.resources; } ;

              if (((virtualMachine.osProfile && virtualMachine.osProfile.windowsConfiguration) && virtualMachine.osProfile.windowsConfiguration.additionalUnattendContents)) {
                delete virtualMachine.osProfile.windowsConfiguration.additionalUnattendContents; } ;

              if (virtualMachine.resources) {
                delete virtualMachine.resources; } ; } ;



            return __this.serviceClients.computeManagementClient.virtualMachines.createOrUpdate(resourceGroupName, virtualMachine.name, virtualMachine, __cb(_, __frame, 18, 81, function ___(__0, __1) { vmResult = __1;
              if (vmResult.error) {
                return _(new Error(util.format($("VM has been %s, but there was an error during provisioning. Error: %s"), ((isNewVM ? "created" : "updated")), vmResult.error.message))); } ;

              return _(null, vmResult); }, true)); }); })(function ___(__e, __r, __cont) { (function ___(__then) { __tryCatch(_, function __$createOrUpdateVM__14() {

              progress.end(); __then(); }); })(function ___() { __tryCatch(_, function ___() { if (__cont) { __then(); } else { _(__e, __r); }; }); }); }); })(function ___() { __tryCatch(_, function __$createOrUpdateVM__14() { _(); }); }); }); },



  getVMSizesByVMName: function getVMSizesByVMName__15(resourceGroupName, vmName, _) { var sizeResult, progress, __this = this; var __frame = { name: "getVMSizesByVMName__15", line: 208 }; return __func(_, this, arguments, getVMSizesByVMName__15, 2, __frame, function __$getVMSizesByVMName__15() {

      progress = __this.cli.interaction.progress(util.format($("Getting virtual machine sizes available for the VM \"%s\""), vmName)); return (function ___(__then) { (function ___(_) { __tryCatch(_, function __$getVMSizesByVMName__15() {

            return __this.serviceClients.computeManagementClient.virtualMachines.listAvailableSizes(resourceGroupName, vmName, __cb(_, __frame, 4, 79, function ___(__0, __1) { sizeResult = __1; _(null, null, true); }, true)); }); })(function ___(__e, __r, __cont) { (function ___(__then) { __tryCatch(_, function __$getVMSizesByVMName__15() {

              progress.end(); __then(); }); })(function ___() { __tryCatch(_, function ___() { if (__cont) { __then(); } else { _(__e, __r); }; }); }); }); })(function ___() { __tryCatch(_, function __$getVMSizesByVMName__15() {


          return _(null, sizeResult); }); }); }); },


  getVMSizesByLocationName: function getVMSizesByLocationName__16(location, _) { var sizeResult, progress, __this = this; var __frame = { name: "getVMSizesByLocationName__16", line: 220 }; return __func(_, this, arguments, getVMSizesByLocationName__16, 1, __frame, function __$getVMSizesByLocationName__16() {

      progress = __this.cli.interaction.progress(util.format($("Listing virtual machine sizes available in the location \"%s\""), location)); return (function ___(__then) { (function ___(_) { __tryCatch(_, function __$getVMSizesByLocationName__16() {

            return __this.serviceClients.computeManagementClient.virtualMachineSizes.list(location, __cb(_, __frame, 4, 83, function ___(__0, __1) { sizeResult = __1; _(null, null, true); }, true)); }); })(function ___(__e, __r, __cont) { (function ___(__then) { __tryCatch(_, function __$getVMSizesByLocationName__16() {

              progress.end(); __then(); }); })(function ___() { __tryCatch(_, function ___() { if (__cont) { __then(); } else { _(__e, __r); }; }); }); }); })(function ___() { __tryCatch(_, function __$getVMSizesByLocationName__16() {


          return _(null, sizeResult); }); }); }); },


  getVMExtension: function getVMExtension__17(resourceGroupName, vmName, extensionName, _) { var progress, getOptions, result, __this = this; var __frame = { name: "getVMExtension__17", line: 232 }; return __func(_, this, arguments, getVMExtension__17, 3, __frame, function __$getVMExtension__17() {
      progress = __this.cli.interaction.progress(util.format($("Looking up extension \"%s\", VM: \"%s\""), extensionName, vmName)); return (function ___(__then) { (function ___(_) { __tryCatch(_, function __$getVMExtension__17() { return (function ___(__then) { (function ___(_) { __tryCatch(_, function __$getVMExtension__17() {

                  getOptions = { expand: "instanceView" };
                  return __this.serviceClients.computeManagementClient.virtualMachineExtensions.get(resourceGroupName, vmName, extensionName, getOptions, __cb(_, __frame, 4, 88, function ___(__0, __1) { result = __1;
                    return _(null, result); }, true)); }); })(function ___(e, __result) { __catch(function __$getVMExtension__17() { if (e) {

                    if ((e.code === "ResourceNotFound")) {
                      return _(null, null); } ;

                    return _(e); } else { _(null, __result); } ; }, _); }); })(function ___() { __tryCatch(_, function __$getVMExtension__17() { _(null, null, true); }); }); }); })(function ___(__e, __r, __cont) { (function ___(__then) { __tryCatch(_, function __$getVMExtension__17() {

              progress.end(); __then(); }); })(function ___() { __tryCatch(_, function ___() { if (__cont) { __then(); } else { _(__e, __r); }; }); }); }); })(function ___() { __tryCatch(_, function __$getVMExtension__17() { _(); }); }); }); },



  createOrUpdateVMExtension: function createOrUpdateVMExtension__18(resourceGroupName, vmName, vmExtension, isNewExtension, _) { var progressMessage, progress, result, __this = this; var __frame = { name: "createOrUpdateVMExtension__18", line: 248 }; return __func(_, this, arguments, createOrUpdateVMExtension__18, 4, __frame, function __$createOrUpdateVMExtension__18() {
      progressMessage = util.format($("%s extension \"%s\", VM: \"%s\""), ((isNewExtension ? "Installing" : "Updating")), vmExtension.name, vmName);
      progress = __this.cli.interaction.progress(progressMessage); return (function ___(__then) { (function ___(_) { __tryCatch(_, function __$createOrUpdateVMExtension__18() {

            return __this.serviceClients.computeManagementClient.virtualMachineExtensions.createOrUpdate(resourceGroupName, vmName, vmExtension.name, vmExtension, __cb(_, __frame, 4, 88, function ___(__0, __1) { result = __1;
              return _(null, result); }, true)); }); })(function ___(__e, __r, __cont) { (function ___(__then) { __tryCatch(_, function __$createOrUpdateVMExtension__18() {

              progress.end(); __then(); }); })(function ___() { __tryCatch(_, function ___() { if (__cont) { __then(); } else { _(__e, __r); }; }); }); }); })(function ___() { __tryCatch(_, function __$createOrUpdateVMExtension__18() { _(); }); }); }); },



  deleteVMExtension: function deleteVMExtension__19(resourceGroupName, vmName, extensionName, _) { var progress, result, __this = this; var __frame = { name: "deleteVMExtension__19", line: 259 }; return __func(_, this, arguments, deleteVMExtension__19, 3, __frame, function __$deleteVMExtension__19() {
      progress = __this.cli.interaction.progress(util.format($("Uninstalling extension \"%s\", VM: \"%s\""), extensionName, vmName)); return (function ___(__then) { (function ___(_) { __tryCatch(_, function __$deleteVMExtension__19() {

            return __this.serviceClients.computeManagementClient.virtualMachineExtensions.deleteMethod(resourceGroupName, vmName, extensionName, __cb(_, __frame, 3, 88, function ___(__0, __1) { result = __1;
              return _(null, result); }, true)); }); })(function ___(__e, __r, __cont) { (function ___(__then) { __tryCatch(_, function __$deleteVMExtension__19() {

              progress.end(); __then(); }); })(function ___() { __tryCatch(_, function ___() { if (__cont) { __then(); } else { _(__e, __r); }; }); }); }); })(function ___() { __tryCatch(_, function __$deleteVMExtension__19() { _(); }); }); }); },



  _expandVM: function _expandVM__20(vm, depth, memoize, dependencies, _) { var virtualMachine, referenceUri, networkProfile, i, networkInterface, netReferenceUri, availabilitySetRef, availReferenceUri; var __frame = { name: "_expandVM__20", line: 269 }; return __func(_, this, arguments, _expandVM__20, 4, __frame, function __$_expandVM__20() {
      if (((depth === 0) || (vm === null))) {
        return _(null, vm); } ;


      if ((depth !== -1)) {
        depth--; } ;


      virtualMachine = vm;
      referenceUri = virtualMachine.id.toLowerCase();
      memoize[referenceUri] = vm; return (function __$_expandVM__20(__then) {

        if (utils.hasValidProperty(virtualMachine, "networkProfile")) {
          networkProfile = virtualMachine.networkProfile; return (function __$_expandVM__20(__then) {
            if ((networkProfile.networkInterfaces instanceof Array)) {
              i = 0; var __4 = false; return (function ___(__break) { var __more; var __loop = __cb(_, __frame, 0, 0, function __$_expandVM__20() { __more = false; if (__4) { i++; } else { __4 = true; } ; var __3 = (i < networkProfile.networkInterfaces.length); if (__3) {
                    networkInterface = networkProfile.networkInterfaces[i];
                    netReferenceUri = networkInterface.id.toLocaleLowerCase(); return (function __$_expandVM__20(__then) {
                      if (!memoize[netReferenceUri]) {

                        return dependencies.networkNic.getNICByIdExpanded(netReferenceUri, depth, memoize, dependencies, __cb(_, __frame, 21, 64, function ___(__0, __1) { networkInterface.expanded = __1; __then(); }, true)); } else { __then(); } ; })(function __$_expandVM__20() { while (__more) { __loop(); }; __more = true; }); } else { __break(); } ; }); do { __loop(); } while (__more); __more = true; })(__then); } else { __then(); } ; })(__then); } else { __then(); } ; })(function __$_expandVM__20() { return (function __$_expandVM__20(__then) {





          if (utils.hasValidProperty(virtualMachine, "availabilitySetReference")) {
            availabilitySetRef = virtualMachine.availabilitySet; return (function __$_expandVM__20(__then) {
              if (((availabilitySetRef.id !== null) && (availabilitySetRef.id !== undefined))) {
                availReferenceUri = availabilitySetRef.id.toLocaleLowerCase(); return (function __$_expandVM__20(__then) {
                  if (!memoize[availReferenceUri]) {

                    return dependencies.availabilitySet.getAvailSetByIdExpanded(availReferenceUri, depth, memoize, dependencies, __cb(_, __frame, 33, 69, function ___(__0, __2) { availabilitySetRef.expanded = __2; __then(); }, true)); } else { __then(); } ; })(__then); } else { __then(); } ; })(__then); } else { __then(); } ; })(function __$_expandVM__20() {




          return _(null, memoize[referenceUri]); }); }); }); },


  _getVMPowerState: function _getVMPowerState__21(resourceGroupName, vmName, _) { var getOptions, intanceViewResult, statuses, i, __this = this; var __frame = { name: "_getVMPowerState__21", line: 310 }; return __func(_, this, arguments, _getVMPowerState__21, 2, __frame, function __$_getVMPowerState__21() { return (function ___(__then) { (function ___(_) { __tryCatch(_, function __$_getVMPowerState__21() {

            getOptions = { expand: "instanceView" };
            return __this.serviceClients.computeManagementClient.virtualMachines.get(resourceGroupName, vmName, getOptions, __cb(_, __frame, 3, 90, function ___(__0, __1) { intanceViewResult = __1;
              statuses = intanceViewResult.instanceView.statuses;
              for (i = 0; (i < statuses.length); i++) {
                if ((statuses[i].code.indexOf("PowerState") > -1)) {
                  return _(null, statuses[i].displayStatus); } ; };



              return _(null, null); }, true)); }); })(function ___(e, __result) { __catch(function __$_getVMPowerState__21() { if (e) {

              if ((e.code === "ResourceNotFound")) {
                return _(null, null); } ;

              return _(e); } else { _(null, __result); } ; }, _); }); })(function ___() { __tryCatch(_, function __$_getVMPowerState__21() { _(); }); }); }); }});




module.exports = VirtualMachine;