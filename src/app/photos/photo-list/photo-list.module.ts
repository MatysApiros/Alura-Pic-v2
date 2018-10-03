import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PhotoListComponent } from "./photo-list.component";
import { LoadButtonComponent } from "./load-button/load-button.component";
import { PhotosComponent } from "./photos/photos.component";
import { FilterByDescription } from "./filter-by-description.pipe";
import { PhotoModule } from "../photo/photo.module";
import { CardModule } from "../../shered/components/card/card.module";
import { SearchComponent } from "./search/search.component";
import { DarkerOnHoverModule } from "../../shered/directives/darker-on-hover/darker-on-hover.module";

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescription,
        SearchComponent
    ],
    imports: [
        CommonModule,
        PhotoModule,
        CardModule,
        DarkerOnHoverModule
    ]
})

export class PhotoListModule {}