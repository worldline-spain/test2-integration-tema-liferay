var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "@angular/router", "./app.component"], function (require, exports, core_1, router_1, app_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CarouselRoutingModule = (function () {
        function CarouselRoutingModule() {
        }
        return CarouselRoutingModule;
    }());
    CarouselRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot([
                    { path: 'home', component: app_component_1.AppComponent }
                ])
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], CarouselRoutingModule);
    exports.CarouselRoutingModule = CarouselRoutingModule;
});
//# sourceMappingURL=carousel-routing.module.js.map