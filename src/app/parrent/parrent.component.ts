import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-parrent',
    templateUrl: './parrent.component.html',
    styleUrls: ['./parrent.component.scss']
})
export class ParrentComponent implements OnInit {
    persons: any[] = [
        {
            username: 'discord1',
            id: 1,
            title: 'Hot girl vườn đào',
            profile_image: 'https://znews-photo-td.zadn.vn/w1024/Uploaded/mdf_drkydd/2018_01_08/thumb.jpg',
            rounded: true
        },
        {
            username: 'discord2',
            id: 2,
            title: 'hình ảnh Kiều Trinh phủ sóng trên màn ảnh rộng với vai diễn Phương Xù ',
            profile_image: 'https://znews-photo-td.zadn.vn/w1024/Uploaded/mdf_drkydd/2018_01_08/2.jpg',
            rounded: false
        }
    ];
    constructor() {}

    ngOnInit() {}
    handleChange(event: boolean, index: number) {
        this.persons[index].rounded = event;
    }
}
