import { NgModule } from "@angular/core";
import { ModelModule } from "../model/model.module";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { StoreComponent } from "../components/store/store.component";

@NgModule({
    imports: [
        ModelModule,
        BrowserModule,
        FormsModule
    ],
    declarations: [],
    exports: []
})
export class StoreModule {}