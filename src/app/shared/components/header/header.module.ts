import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormSearchComponent } from "../form-search/form-search.component";
import { FormSearchModule } from "../form-search/form-search.module";
import { HeaderRoutingModule } from "./header.routing.module";

@NgModule({
    declarations: [
        FormSearchComponent
    ],
    imports: [
        HeaderRoutingModule,
        CommonModule
    ],
})
export class HeaderModule { }