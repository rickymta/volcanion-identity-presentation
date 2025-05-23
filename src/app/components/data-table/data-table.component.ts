import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderModel } from '../../models/data-table/header.model';
import { FilterModel } from '../../models/data-table/filter.model';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input() tableData: any[] = []; // Dữ liệu của bảng
  @Input() tableHeaders: HeaderModel[] = []; // Tiêu đề bảng
  @Input() pageSizeOptions: number[] = [10, 25, 50, 100]; // Các tùy chọn số hàng trên mỗi trang
  @Output() afterChangePageSize = new EventEmitter<FilterModel>();
  @Output() afterSelectedPage = new EventEmitter<FilterModel>();
  @Output() afterSelectedRows = new EventEmitter<FilterModel>();
  @Output() afterClickView = new EventEmitter<string>();
  @Output() afterClickEdit = new EventEmitter<string>();
  @Output() afterClickDelete = new EventEmitter<string>();

  data: any[] = [
    {
      id: 1,
      name: 'Jacquie',
      quantity: 44834,
      status: 'Yellow',
      status_type: 'bg-warning',
      amount: 42357
    },
    {
      id: 2,
      name: 'Udall',
      quantity: 57031,
      status: 'Aquamarine',
      status_type: 'bg-success',
      amount: 41074
    },
    { id: 3, name: 'Lewie', quantity: 24823, status: 'Pink', status_type: 'bg-warning', amount: 99195 },
    { id: 4, name: 'Demott', quantity: 32537, status: 'Mauv', status_type: 'bg-secondary', amount: 58951 },
    {
      id: 5,
      name: 'Dianemarie',
      quantity: 80119,
      status: 'Aquamarine',
      status_type: 'bg-primary',
      amount: 93209
    },
    { id: 6, name: 'Tina', quantity: 60559, status: 'Maroon', status_type: 'bg-danger', amount: 80345 },
    { id: 7, name: 'Brandea', quantity: 27088, status: 'Blue', status_type: 'bg-warning', amount: 87132 },
    {
      id: 8,
      name: 'Gretchen',
      quantity: 53710,
      status: 'Fuscia',
      status_type: 'bg-warning',
      amount: 16734
    },
    {
      id: 9,
      name: 'Gwenore',
      quantity: 25007,
      status: 'Aquamarine',
      status_type: 'bg-secondary',
      amount: 14877
    },
    {
      id: 10,
      name: 'Gabriella',
      quantity: 93452,
      status: 'Fuscia',
      status_type: 'bg-warning',
      amount: 73021
    },
    { id: 11, name: 'Dru', quantity: 47739, status: 'Blue', status_type: 'bg-warning', amount: 23451 },
    { id: 12, name: 'Max', quantity: 33904, status: 'Puce', status_type: 'bg-secondary', amount: 43051 },
    { id: 13, name: 'Mikkel', quantity: 76134, status: 'Teal', status_type: 'bg-info', amount: 90932 },
    {
      id: 14,
      name: 'Danna',
      quantity: 20918,
      status: 'Goldenrod',
      status_type: 'bg-warning',
      amount: 66836
    },
    {
      id: 15,
      name: 'Georgette',
      quantity: 67519,
      status: 'Goldenrod',
      status_type: 'bg-secondary',
      amount: 99041
    },
    { id: 16, name: 'Clem', quantity: 18648, status: 'Purple', status_type: 'bg-warning', amount: 34952 },
    { id: 17, name: 'Erwin', quantity: 83641, status: 'Fuscia', status_type: 'bg-warning', amount: 81759 },
    { id: 18, name: 'Brietta', quantity: 32506, status: 'Mauv', status_type: 'bg-info', amount: 92663 },
    {
      id: 19,
      name: 'Ingeberg',
      quantity: 70246,
      status: 'Aquamarine',
      status_type: 'bg-warning',
      amount: 19121
    },
    { id: 20, name: 'Tobie', quantity: 69442, status: 'Puce', status_type: 'bg-info', amount: 77634 },
    { id: 21, name: 'Patin', quantity: 74832, status: 'Red', status_type: 'bg-warning', amount: 85939 },
    { id: 22, name: 'Gare', quantity: 34716, status: 'Orange', status_type: 'bg-primary', amount: 59202 },
    {
      id: 23,
      name: 'Violette',
      quantity: 34763,
      status: 'Violet',
      status_type: 'bg-secondary',
      amount: 49399
    },
    {
      id: 24,
      name: 'Casie',
      quantity: 91747,
      status: 'Aquamarine',
      status_type: 'bg-warning',
      amount: 17513
    },
    { id: 25, name: 'Elie', quantity: 92555, status: 'Crimson', status_type: 'bg-primary', amount: 33584 },
    { id: 26, name: 'Kelwin', quantity: 30558, status: 'Goldenrod', status_type: 'bg-info', amount: 75253 },
    { id: 27, name: 'Teresina', quantity: 15941, status: 'Blue', status_type: 'bg-warning', amount: 26419 },
    {
      id: 28,
      name: 'Concettina',
      quantity: 88989,
      status: 'Aquamarine',
      status_type: 'bg-warning',
      amount: 37849
    },
    { id: 29, name: 'Myrta', quantity: 16331, status: 'Crimson', status_type: 'bg-danger', amount: 63895 },
    {
      id: 30,
      name: 'Rebbecca',
      quantity: 61164,
      status: 'Fuscia',
      status_type: 'bg-success',
      amount: 45778
    },
    {
      id: 31,
      name: 'Clair',
      quantity: 59795,
      status: 'Fuscia',
      status_type: 'bg-secondary',
      amount: 51287
    },
    {
      id: 32,
      name: 'La verne',
      quantity: 50622,
      status: 'Purple',
      status_type: 'bg-warning',
      amount: 25621
    },
    { id: 33, name: 'Rowena', quantity: 97521, status: 'Khaki', status_type: 'bg-warning', amount: 84257 },
    { id: 34, name: 'Gibb', quantity: 58333, status: 'Purple', status_type: 'bg-success', amount: 33334 },
    { id: 35, name: 'Bernarr', quantity: 78483, status: 'Red', status_type: 'bg-info', amount: 98704 },
    {
      id: 36,
      name: 'Idell',
      quantity: 25110,
      status: 'Yellow',
      status_type: 'bg-secondary',
      amount: 34191
    },
    { id: 37, name: 'Vin', quantity: 24393, status: 'Fuscia', status_type: 'bg-info', amount: 59298 },
    { id: 38, name: 'Lane', quantity: 85418, status: 'Indigo', status_type: 'bg-secondary', amount: 37509 },
    { id: 39, name: 'Rora', quantity: 22635, status: 'Pink', status_type: 'bg-success', amount: 21258 },
    {
      id: 40,
      name: 'Josh',
      quantity: 76641,
      status: 'Goldenrod',
      status_type: 'bg-secondary',
      amount: 26895
    },
    { id: 41, name: 'Dorris', quantity: 93346, status: 'Yellow', status_type: 'bg-info', amount: 67521 },
    { id: 42, name: 'Bevan', quantity: 96814, status: 'Green', status_type: 'bg-danger', amount: 28049 },
    { id: 43, name: 'Adeline', quantity: 99639, status: 'Blue', status_type: 'bg-success', amount: 82044 },
    { id: 44, name: 'Hatty', quantity: 82641, status: 'Puce', status_type: 'bg-warning', amount: 66831 },
    {
      id: 45,
      name: 'Chrystel',
      quantity: 89215,
      status: 'Aquamarine',
      status_type: 'bg-primary',
      amount: 73507
    },
    {
      id: 46,
      name: 'Haslett',
      quantity: 91754,
      status: 'Mauv',
      status_type: 'bg-secondary',
      amount: 43388
    },
    {
      id: 47,
      name: 'Newton',
      quantity: 27010,
      status: 'Goldenrod',
      status_type: 'bg-warning',
      amount: 85395
    },
    {
      id: 48,
      name: 'Colleen',
      quantity: 89516,
      status: 'Aquamarine',
      status_type: 'bg-success',
      amount: 83507
    },
    { id: 49, name: 'Cary', quantity: 99537, status: 'Purple', status_type: 'bg-danger', amount: 65566 },
    {
      id: 50,
      name: 'Barbabas',
      quantity: 78489,
      status: 'Aquamarine',
      status_type: 'bg-primary',
      amount: 93697
    },
    { id: 51, name: 'Lydon', quantity: 81716, status: 'Crimson', status_type: 'bg-info', amount: 11315 },
    { id: 52, name: 'Taber', quantity: 12403, status: 'Mauv', status_type: 'bg-info', amount: 92032 },
    { id: 53, name: 'Emmit', quantity: 63376, status: 'Red', status_type: 'bg-secondary', amount: 21362 },
    { id: 54, name: 'Lou', quantity: 84682, status: 'Yellow', status_type: 'bg-secondary', amount: 86757 },
    { id: 55, name: 'Amos', quantity: 19907, status: 'Mauv', status_type: 'bg-warning', amount: 46666 },
    { id: 56, name: 'Justinn', quantity: 41021, status: 'Purple', status_type: 'bg-danger', amount: 80949 },
    {
      id: 57,
      name: 'Peder',
      quantity: 64122,
      status: 'Orange',
      status_type: 'bg-secondary',
      amount: 80606
    },
    { id: 58, name: 'Carey', quantity: 57963, status: 'Violet', status_type: 'bg-primary', amount: 98498 },
    {
      id: 59,
      name: 'Benoite',
      quantity: 46616,
      status: 'Goldenrod',
      status_type: 'bg-danger',
      amount: 88345
    },
    {
      id: 60,
      name: 'Arabel',
      quantity: 61325,
      status: 'Goldenrod',
      status_type: 'bg-warning',
      amount: 43002
    },
    {
      id: 61,
      name: 'Barnard',
      quantity: 50149,
      status: 'Fuscia',
      status_type: 'bg-primary',
      amount: 98028
    },
    { id: 62, name: 'Jeff', quantity: 84158, status: 'Puce', status_type: 'bg-danger', amount: 73525 },
    { id: 63, name: 'Giustino', quantity: 69935, status: 'Red', status_type: 'bg-success', amount: 98356 },
    { id: 64, name: 'Nedda', quantity: 74572, status: 'Puce', status_type: 'bg-danger', amount: 38886 },
    {
      id: 65,
      name: 'Marylynne',
      quantity: 14714,
      status: 'Yellow',
      status_type: 'bg-danger',
      amount: 91736
    },
    {
      id: 66,
      name: 'Lewiss',
      quantity: 42983,
      status: 'Aquamarine',
      status_type: 'bg-primary',
      amount: 31954
    },
    {
      id: 67,
      name: 'Carmina',
      quantity: 50485,
      status: 'Maroon',
      status_type: 'bg-primary',
      amount: 87739
    },
    { id: 68, name: 'Adeline', quantity: 10292, status: 'Mauv', status_type: 'bg-success', amount: 36613 },
    {
      id: 69,
      name: 'Claribel',
      quantity: 46989,
      status: 'Aquamarine',
      status_type: 'bg-success',
      amount: 94359
    },
    { id: 70, name: 'Ethelda', quantity: 49049, status: 'Pink', status_type: 'bg-warning', amount: 30164 },
    { id: 71, name: 'Garland', quantity: 41628, status: 'Violet', status_type: 'bg-info', amount: 83095 },
    { id: 72, name: 'Abby', quantity: 55398, status: 'Violet', status_type: 'bg-success', amount: 17249 },
    { id: 73, name: 'Ernest', quantity: 88730, status: 'Blue', status_type: 'bg-primary', amount: 76290 },
    { id: 74, name: 'Bill', quantity: 31979, status: 'Red', status_type: 'bg-primary', amount: 98630 },
    { id: 75, name: 'Ron', quantity: 58875, status: 'Khaki', status_type: 'bg-success', amount: 21319 },
    { id: 76, name: 'Humberto', quantity: 74799, status: 'Red', status_type: 'bg-primary', amount: 94436 },
    { id: 77, name: 'Ida', quantity: 37386, status: 'Turquoise', status_type: 'bg-success', amount: 24323 },
    { id: 78, name: 'Othello', quantity: 71847, status: 'Purple', status_type: 'bg-danger', amount: 64010 },
    { id: 79, name: 'Alethea', quantity: 50671, status: 'Blue', status_type: 'bg-danger', amount: 99421 },
    { id: 80, name: 'Rosabel', quantity: 15870, status: 'Red', status_type: 'bg-danger', amount: 51651 },
    { id: 81, name: 'Maiga', quantity: 29749, status: 'Teal', status_type: 'bg-info', amount: 36981 },
    {
      id: 82,
      name: 'Harbert',
      quantity: 56018,
      status: 'Aquamarine',
      status_type: 'bg-danger',
      amount: 65550
    },
    { id: 83, name: 'Nadia', quantity: 11441, status: 'Blue', status_type: 'bg-success', amount: 18583 },
    {
      id: 84,
      name: 'Raffaello',
      quantity: 35651,
      status: 'Blue',
      status_type: 'bg-warning',
      amount: 22984
    },
    { id: 85, name: 'Pattin', quantity: 91196, status: 'Crimson', status_type: 'bg-info', amount: 27833 },
    { id: 86, name: 'Hetti', quantity: 93224, status: 'Mauv', status_type: 'bg-success', amount: 92919 },
    { id: 87, name: 'Fredia', quantity: 18210, status: 'Mauv', status_type: 'bg-danger', amount: 97909 },
    { id: 88, name: 'Nahum', quantity: 37681, status: 'Maroon', status_type: 'bg-success', amount: 44164 },
    { id: 89, name: 'Roland', quantity: 79281, status: 'Red', status_type: 'bg-primary', amount: 28702 },
    {
      id: 90,
      name: 'Valeda',
      quantity: 27890,
      status: 'Aquamarine',
      status_type: 'bg-danger',
      amount: 48902
    },
    {
      id: 91,
      name: 'Roderigo',
      quantity: 99997,
      status: 'Yellow',
      status_type: 'bg-secondary',
      amount: 71234
    },
    { id: 92, name: 'Nanete', quantity: 63083, status: 'Teal', status_type: 'bg-secondary', amount: 99924 },
    {
      id: 93,
      name: 'Cordelia',
      quantity: 68030,
      status: 'Crimson',
      status_type: 'bg-primary',
      amount: 42703
    },
    {
      id: 94,
      name: 'Darice',
      quantity: 91516,
      status: 'Turquoise',
      status_type: 'bg-primary',
      amount: 58912
    },
    { id: 95, name: 'Erv', quantity: 75804, status: 'Orange', status_type: 'bg-primary', amount: 86028 },
    { id: 96, name: 'Klaus', quantity: 78241, status: 'Indigo', status_type: 'bg-info', amount: 60705 },
    { id: 97, name: 'Jorry', quantity: 84718, status: 'Puce', status_type: 'bg-primary', amount: 20908 },
    { id: 98, name: 'Ashli', quantity: 35289, status: 'Blue', status_type: 'bg-success', amount: 38707 },
    { id: 99, name: 'Micaela', quantity: 20146, status: 'Blue', status_type: 'bg-warning', amount: 48622 },
    {
      id: 100,
      name: 'Sybilla',
      quantity: 67092,
      status: 'Turquoise',
      status_type: 'bg-danger',
      amount: 71125
    },
    {
      id: 101,
      name: 'Francois',
      quantity: 40639,
      status: 'Goldenrod',
      status_type: 'bg-secondary',
      amount: 62681
    },
    {
      id: 102,
      name: 'Georgena',
      quantity: 66200,
      status: 'Violet',
      status_type: 'bg-secondary',
      amount: 87393
    },
    {
      id: 103,
      name: 'Aurelia',
      quantity: 67017,
      status: 'Purple',
      status_type: 'bg-warning',
      amount: 79198
    },
    { id: 104, name: 'Emmy', quantity: 67181, status: 'Teal', status_type: 'bg-secondary', amount: 22528 },
    {
      id: 105,
      name: 'Coreen',
      quantity: 43595,
      status: 'Yellow',
      status_type: 'bg-warning',
      amount: 20457
    },
    {
      id: 106,
      name: 'Coraline',
      quantity: 15532,
      status: 'Yellow',
      status_type: 'bg-danger',
      amount: 24107
    },
    { id: 107, name: 'Heywood', quantity: 71094, status: 'Mauv', status_type: 'bg-primary', amount: 28523 },
    { id: 108, name: 'Zita', quantity: 32452, status: 'Puce', status_type: 'bg-success', amount: 35795 },
    {
      id: 109,
      name: 'Harwilll',
      quantity: 11834,
      status: 'Fuscia',
      status_type: 'bg-secondary',
      amount: 88274
    },
    { id: 110, name: 'Isak', quantity: 51975, status: 'Yellow', status_type: 'bg-danger', amount: 49160 },
    { id: 111, name: 'Colas', quantity: 27524, status: 'Violet', status_type: 'bg-success', amount: 98433 },
    { id: 112, name: 'Zarla', quantity: 61089, status: 'Pink', status_type: 'bg-primary', amount: 67557 },
    { id: 113, name: 'Ynez', quantity: 12860, status: 'Puce', status_type: 'bg-danger', amount: 73232 },
    {
      id: 114,
      name: 'Kathryne',
      quantity: 25658,
      status: 'Goldenrod',
      status_type: 'bg-success',
      amount: 46310
    },
    { id: 115, name: 'Austin', quantity: 23728, status: 'Teal', status_type: 'bg-warning', amount: 60375 },
    {
      id: 116,
      name: 'Melamie',
      quantity: 22770,
      status: 'Yellow',
      status_type: 'bg-primary',
      amount: 56252
    },
    { id: 117, name: 'Pancho', quantity: 46606, status: 'Red', status_type: 'bg-info', amount: 25632 },
    { id: 118, name: 'Arie', quantity: 79603, status: 'Violet', status_type: 'bg-primary', amount: 17637 },
    {
      id: 119,
      name: 'Dionne',
      quantity: 22326,
      status: 'Mauv',
      status_type: 'bg-secondary',
      amount: 68158
    },
    { id: 120, name: 'Rakel', quantity: 28318, status: 'Violet', status_type: 'bg-info', amount: 83190 },
    {
      id: 121,
      name: 'Padraig',
      quantity: 13442,
      status: 'Yellow',
      status_type: 'bg-warning',
      amount: 65912
    },
    {
      id: 122,
      name: 'Padraic',
      quantity: 94285,
      status: 'Crimson',
      status_type: 'bg-primary',
      amount: 20595
    },
    {
      id: 123,
      name: 'Nickie',
      quantity: 63268,
      status: 'Mauv',
      status_type: 'bg-secondary',
      amount: 96930
    },
    {
      id: 124,
      name: 'Maggie',
      quantity: 67687,
      status: 'Green',
      status_type: 'bg-secondary',
      amount: 36229
    },
    { id: 125, name: 'Hayyim', quantity: 80169, status: 'Blue', status_type: 'bg-danger', amount: 73166 },
    {
      id: 126,
      name: 'Roberto',
      quantity: 65984,
      status: 'Yellow',
      status_type: 'bg-danger',
      amount: 13476
    },
    {
      id: 127,
      name: 'Hunt',
      quantity: 64356,
      status: 'Goldenrod',
      status_type: 'bg-danger',
      amount: 45625
    },
    { id: 128, name: 'Maximilian', quantity: 24105, status: 'Blue', status_type: 'bg-info', amount: 87432 },
    {
      id: 129,
      name: 'Farand',
      quantity: 29535,
      status: 'Aquamarine',
      status_type: 'bg-secondary',
      amount: 53806
    },
    {
      id: 130,
      name: 'Arlena',
      quantity: 83992,
      status: 'Fuscia',
      status_type: 'bg-success',
      amount: 52765
    },
    { id: 131, name: 'Ike', quantity: 13054, status: 'Fuscia', status_type: 'bg-success', amount: 97455 },
    {
      id: 132,
      name: 'Claybourne',
      quantity: 20333,
      status: 'Fuscia',
      status_type: 'bg-warning',
      amount: 97588
    },
    {
      id: 133,
      name: 'Mariellen',
      quantity: 55446,
      status: 'Blue',
      status_type: 'bg-secondary',
      amount: 12319
    },
    { id: 134, name: 'Phil', quantity: 16857, status: 'Orange', status_type: 'bg-success', amount: 37437 },
    {
      id: 135,
      name: 'Mirna',
      quantity: 16874,
      status: 'Orange',
      status_type: 'bg-secondary',
      amount: 51628
    },
    { id: 136, name: 'Antoine', quantity: 80037, status: 'Indigo', status_type: 'bg-info', amount: 41301 },
    { id: 137, name: 'Edgard', quantity: 49969, status: 'Khaki', status_type: 'bg-danger', amount: 23553 },
    {
      id: 138,
      name: 'Hillary',
      quantity: 51852,
      status: 'Green',
      status_type: 'bg-secondary',
      amount: 55623
    },
    { id: 139, name: 'Aguste', quantity: 97220, status: 'Pink', status_type: 'bg-success', amount: 46689 },
    { id: 140, name: 'Aimil', quantity: 69235, status: 'Teal', status_type: 'bg-secondary', amount: 35258 },
    {
      id: 141,
      name: 'Guenna',
      quantity: 75203,
      status: 'Purple',
      status_type: 'bg-success',
      amount: 26771
    },
    {
      id: 142,
      name: 'Florette',
      quantity: 70699,
      status: 'Indigo',
      status_type: 'bg-primary',
      amount: 94573
    },
    { id: 143, name: 'Sianna', quantity: 15866, status: 'Khaki', status_type: 'bg-danger', amount: 20563 },
    {
      id: 144,
      name: 'Ladonna',
      quantity: 64928,
      status: 'Aquamarine',
      status_type: 'bg-info',
      amount: 23085
    },
    {
      id: 145,
      name: 'Katharine',
      quantity: 20058,
      status: 'Indigo',
      status_type: 'bg-danger',
      amount: 10648
    },
    { id: 146, name: 'Bea', quantity: 12373, status: 'Puce', status_type: 'bg-warning', amount: 25679 },
    { id: 147, name: 'Gus', quantity: 73988, status: 'Maroon', status_type: 'bg-warning', amount: 72354 },
    { id: 148, name: 'Alanson', quantity: 77094, status: 'Mauv', status_type: 'bg-danger', amount: 31180 },
    {
      id: 149,
      name: 'Fawn',
      quantity: 92702,
      status: 'Turquoise',
      status_type: 'bg-primary',
      amount: 39996
    },
    { id: 150, name: 'Carr', quantity: 30252, status: 'Maroon', status_type: 'bg-warning', amount: 85437 },
    {
      id: 151,
      name: 'Bartolemo',
      quantity: 83404,
      status: 'Puce',
      status_type: 'bg-success',
      amount: 77001
    },
    {
      id: 152,
      name: 'Ofilia',
      quantity: 39566,
      status: 'Mauv',
      status_type: 'bg-secondary',
      amount: 41772
    },
    { id: 153, name: 'Casey', quantity: 35525, status: 'Blue', status_type: 'bg-danger', amount: 64945 },
    { id: 154, name: 'Tait', quantity: 98080, status: 'Orange', status_type: 'bg-info', amount: 53078 },
    { id: 155, name: 'Sadie', quantity: 42730, status: 'Green', status_type: 'bg-success', amount: 37862 },
    { id: 156, name: 'Hercule', quantity: 20774, status: 'Teal', status_type: 'bg-primary', amount: 89313 },
    { id: 157, name: 'Giles', quantity: 70783, status: 'Indigo', status_type: 'bg-success', amount: 54086 },
    {
      id: 158,
      name: 'Reinaldo',
      quantity: 53831,
      status: 'Fuscia',
      status_type: 'bg-warning',
      amount: 77674
    },
    { id: 159, name: 'Anya', quantity: 22387, status: 'Indigo', status_type: 'bg-success', amount: 18514 },
    {
      id: 160,
      name: 'Bernice',
      quantity: 61332,
      status: 'Violet',
      status_type: 'bg-secondary',
      amount: 74090
    },
    { id: 161, name: 'Boote', quantity: 59988, status: 'Indigo', status_type: 'bg-success', amount: 20209 },
    {
      id: 162,
      name: 'Lucila',
      quantity: 42311,
      status: 'Indigo',
      status_type: 'bg-primary',
      amount: 85037
    },
    { id: 163, name: 'Malachi', quantity: 57561, status: 'Khaki', status_type: 'bg-danger', amount: 72630 },
    {
      id: 164,
      name: 'Ambrose',
      quantity: 52158,
      status: 'Teal',
      status_type: 'bg-secondary',
      amount: 33365
    },
    {
      id: 165,
      name: 'Dierdre',
      quantity: 55504,
      status: 'Goldenrod',
      status_type: 'bg-primary',
      amount: 48938
    },
    {
      id: 166,
      name: 'Harmonia',
      quantity: 36560,
      status: 'Teal',
      status_type: 'bg-primary',
      amount: 73117
    },
    { id: 167, name: 'Stu', quantity: 54468, status: 'Violet', status_type: 'bg-warning', amount: 96675 },
    { id: 168, name: 'Ines', quantity: 30623, status: 'Teal', status_type: 'bg-success', amount: 30189 },
    {
      id: 169,
      name: 'Andriette',
      quantity: 89395,
      status: 'Aquamarine',
      status_type: 'bg-danger',
      amount: 23440
    },
    {
      id: 170,
      name: 'Ann-marie',
      quantity: 23424,
      status: 'Red',
      status_type: 'bg-warning',
      amount: 99589
    },
    {
      id: 171,
      name: 'Arri',
      quantity: 80882,
      status: 'Goldenrod',
      status_type: 'bg-primary',
      amount: 39930
    },
    {
      id: 172,
      name: 'Garold',
      quantity: 15971,
      status: 'Orange',
      status_type: 'bg-primary',
      amount: 12002
    },
    {
      id: 173,
      name: 'Essie',
      quantity: 57501,
      status: 'Aquamarine',
      status_type: 'bg-danger',
      amount: 35324
    },
    { id: 174, name: 'Ilka', quantity: 71205, status: 'Red', status_type: 'bg-warning', amount: 38044 },
    {
      id: 175,
      name: 'Christa',
      quantity: 54974,
      status: 'Indigo',
      status_type: 'bg-success',
      amount: 24732
    },
    { id: 176, name: 'Coleen', quantity: 37556, status: 'Fuscia', status_type: 'bg-danger', amount: 15519 },
    { id: 177, name: 'Lawry', quantity: 48323, status: 'Indigo', status_type: 'bg-success', amount: 46230 },
    { id: 178, name: 'Cornall', quantity: 41408, status: 'Mauv', status_type: 'bg-danger', amount: 73498 },
    { id: 179, name: 'Wyn', quantity: 19196, status: 'Purple', status_type: 'bg-info', amount: 22246 },
    { id: 180, name: 'Didi', quantity: 60488, status: 'Crimson', status_type: 'bg-info', amount: 24104 },
    {
      id: 181,
      name: 'Kinnie',
      quantity: 64899,
      status: 'Orange',
      status_type: 'bg-warning',
      amount: 40347
    },
    { id: 182, name: 'Kalina', quantity: 40361, status: 'Puce', status_type: 'bg-info', amount: 61711 },
    { id: 183, name: 'Odie', quantity: 58706, status: 'Orange', status_type: 'bg-primary', amount: 16607 },
    {
      id: 184,
      name: 'Daniele',
      quantity: 31128,
      status: 'Orange',
      status_type: 'bg-primary',
      amount: 49640
    },
    {
      id: 185,
      name: 'Jarvis',
      quantity: 59427,
      status: 'Aquamarine',
      status_type: 'bg-primary',
      amount: 93075
    },
    { id: 186, name: 'Patrica', quantity: 17527, status: 'Red', status_type: 'bg-danger', amount: 29253 },
    { id: 187, name: 'Jaimie', quantity: 74352, status: 'Violet', status_type: 'bg-info', amount: 77031 },
    {
      id: 188,
      name: 'Magdalene',
      quantity: 49347,
      status: 'Orange',
      status_type: 'bg-warning',
      amount: 45226
    },
    {
      id: 189,
      name: 'Paulie',
      quantity: 26973,
      status: 'Yellow',
      status_type: 'bg-success',
      amount: 51690
    },
    { id: 190, name: 'Wilie', quantity: 56134, status: 'Teal', status_type: 'bg-info', amount: 79762 },
    { id: 191, name: 'Stevena', quantity: 49505, status: 'Pink', status_type: 'bg-info', amount: 25449 },
    { id: 192, name: 'Denys', quantity: 75827, status: 'Teal', status_type: 'bg-info', amount: 13920 },
    { id: 193, name: 'Kris', quantity: 33138, status: 'Blue', status_type: 'bg-success', amount: 47761 },
    { id: 194, name: 'Verna', quantity: 99471, status: 'Yellow', status_type: 'bg-warning', amount: 61066 },
    {
      id: 195,
      name: 'Vittoria',
      quantity: 43428,
      status: 'Pink',
      status_type: 'bg-warning',
      amount: 32675
    },
    {
      id: 196,
      name: 'Shaylyn',
      quantity: 31601,
      status: 'Turquoise',
      status_type: 'bg-primary',
      amount: 19626
    },
    {
      id: 197,
      name: 'Consuela',
      quantity: 48524,
      status: 'Violet',
      status_type: 'bg-success',
      amount: 99808
    },
    { id: 198, name: 'Sydel', quantity: 81620, status: 'Green', status_type: 'bg-primary', amount: 69484 },
    { id: 199, name: 'Ramonda', quantity: 69123, status: 'Blue', status_type: 'bg-success', amount: 62181 },
    { id: 200, name: 'Humfrey', quantity: 15994, status: 'Mauv', status_type: 'bg-primary', amount: 63028 },
    { id: 201, name: 'Aldwin', quantity: 40961, status: 'Teal', status_type: 'bg-info', amount: 36367 },
    {
      id: 202,
      name: 'Harrison',
      quantity: 86300,
      status: 'Mauv',
      status_type: 'bg-primary',
      amount: 17295
    },
    { id: 203, name: 'Madlin', quantity: 31724, status: 'Khaki', status_type: 'bg-info', amount: 75628 },
    {
      id: 204,
      name: 'Jordana',
      quantity: 57941,
      status: 'Maroon',
      status_type: 'bg-success',
      amount: 31566
    },
    {
      id: 205,
      name: 'Trefor',
      quantity: 69994,
      status: 'Aquamarine',
      status_type: 'bg-success',
      amount: 28182
    },
    { id: 206, name: 'Mable', quantity: 94936, status: 'Fuscia', status_type: 'bg-danger', amount: 77040 },
    {
      id: 207,
      name: 'Averill',
      quantity: 76555,
      status: 'Khaki',
      status_type: 'bg-success',
      amount: 40615
    },
    {
      id: 208,
      name: 'Florence',
      quantity: 15230,
      status: 'Yellow',
      status_type: 'bg-danger',
      amount: 31504
    },
    {
      id: 209,
      name: 'Derward',
      quantity: 13898,
      status: 'Aquamarine',
      status_type: 'bg-secondary',
      amount: 92856
    },
    { id: 210, name: 'Susi', quantity: 68137, status: 'Teal', status_type: 'bg-secondary', amount: 50773 },
    { id: 211, name: 'Monique', quantity: 70367, status: 'Pink', status_type: 'bg-warning', amount: 34793 },
    { id: 212, name: 'Laverna', quantity: 37135, status: 'Indigo', status_type: 'bg-info', amount: 66633 },
    {
      id: 213,
      name: 'Cassandre',
      quantity: 29202,
      status: 'Khaki',
      status_type: 'bg-success',
      amount: 42489
    },
    { id: 214, name: 'Misty', quantity: 59224, status: 'Fuscia', status_type: 'bg-primary', amount: 51038 },
    {
      id: 215,
      name: 'Aloysius',
      quantity: 64714,
      status: 'Yellow',
      status_type: 'bg-secondary',
      amount: 11586
    },
    { id: 216, name: 'Harv', quantity: 63113, status: 'Pink', status_type: 'bg-secondary', amount: 75470 },
    {
      id: 217,
      name: 'Georgie',
      quantity: 80000,
      status: 'Turquoise',
      status_type: 'bg-secondary',
      amount: 17143
    },
    { id: 218, name: 'Kippy', quantity: 72500, status: 'Khaki', status_type: 'bg-warning', amount: 98164 },
    {
      id: 219,
      name: 'Tris',
      quantity: 74335,
      status: 'Aquamarine',
      status_type: 'bg-success',
      amount: 35224
    },
    { id: 220, name: 'Bengt', quantity: 91206, status: 'Khaki', status_type: 'bg-primary', amount: 10190 },
    { id: 221, name: 'Glyn', quantity: 54003, status: 'Violet', status_type: 'bg-success', amount: 43228 },
    { id: 222, name: 'Aila', quantity: 92658, status: 'Violet', status_type: 'bg-warning', amount: 73653 },
    {
      id: 223,
      name: 'Pembroke',
      quantity: 69804,
      status: 'Violet',
      status_type: 'bg-primary',
      amount: 10487
    },
    { id: 224, name: 'Rubin', quantity: 89254, status: 'Red', status_type: 'bg-warning', amount: 49908 },
    {
      id: 225,
      name: 'Faun',
      quantity: 51740,
      status: 'Turquoise',
      status_type: 'bg-primary',
      amount: 92067
    },
    {
      id: 226,
      name: 'Angelika',
      quantity: 32883,
      status: 'Turquoise',
      status_type: 'bg-secondary',
      amount: 41949
    },
    {
      id: 227,
      name: 'Marabel',
      quantity: 60217,
      status: 'Mauv',
      status_type: 'bg-secondary',
      amount: 59216
    },
    { id: 228, name: 'Callida', quantity: 44888, status: 'Khaki', status_type: 'bg-danger', amount: 66580 },
    {
      id: 229,
      name: 'Ferdinanda',
      quantity: 16672,
      status: 'Indigo',
      status_type: 'bg-warning',
      amount: 46667
    },
    {
      id: 230,
      name: 'Maia',
      quantity: 48369,
      status: 'Yellow',
      status_type: 'bg-secondary',
      amount: 88680
    },
    {
      id: 231,
      name: 'Domingo',
      quantity: 67559,
      status: 'Crimson',
      status_type: 'bg-warning',
      amount: 76616
    },
    { id: 232, name: 'Kala', quantity: 66112, status: 'Green', status_type: 'bg-danger', amount: 72188 },
    { id: 233, name: 'Dalston', quantity: 47825, status: 'Mauv', status_type: 'bg-primary', amount: 12876 },
    { id: 234, name: 'Iormina', quantity: 84329, status: 'Mauv', status_type: 'bg-warning', amount: 20392 },
    {
      id: 235,
      name: 'Everett',
      quantity: 95363,
      status: 'Violet',
      status_type: 'bg-danger',
      amount: 47499
    },
    {
      id: 236,
      name: 'Janessa',
      quantity: 63001,
      status: 'Mauv',
      status_type: 'bg-secondary',
      amount: 79529
    },
    {
      id: 237,
      name: 'Angeline',
      quantity: 97691,
      status: 'Goldenrod',
      status_type: 'bg-danger',
      amount: 84512
    },
    {
      id: 238,
      name: 'Glynis',
      quantity: 12304,
      status: 'Turquoise',
      status_type: 'bg-warning',
      amount: 75900
    },
    {
      id: 239,
      name: 'Del',
      quantity: 87811,
      status: 'Turquoise',
      status_type: 'bg-warning',
      amount: 75033
    },
    { id: 240, name: 'See', quantity: 25971, status: 'Crimson', status_type: 'bg-success', amount: 43208 },
    { id: 241, name: 'Thomas', quantity: 30484, status: 'Puce', status_type: 'bg-danger', amount: 17357 },
    { id: 242, name: 'Melisa', quantity: 22893, status: 'Mauv', status_type: 'bg-danger', amount: 43456 },
    { id: 243, name: 'Cyndie', quantity: 48736, status: 'Blue', status_type: 'bg-info', amount: 17502 },
    { id: 244, name: 'Toinette', quantity: 23479, status: 'Blue', status_type: 'bg-danger', amount: 50874 },
    { id: 245, name: 'Nady', quantity: 36174, status: 'Pink', status_type: 'bg-secondary', amount: 97198 },
    {
      id: 246,
      name: 'Corny',
      quantity: 28142,
      status: 'Turquoise',
      status_type: 'bg-success',
      amount: 42900
    },
    { id: 247, name: 'Garvy', quantity: 48519, status: 'Green', status_type: 'bg-info', amount: 10170 },
    { id: 248, name: 'Gwenora', quantity: 49396, status: 'Fuscia', status_type: 'bg-info', amount: 55635 },
    {
      id: 249,
      name: 'Kasper',
      quantity: 52466,
      status: 'Maroon',
      status_type: 'bg-primary',
      amount: 34090
    },
    { id: 250, name: 'Kara', quantity: 76266, status: 'Green', status_type: 'bg-primary', amount: 35197 },
    {
      id: 251,
      name: 'Gabrielle',
      quantity: 92465,
      status: 'Pink',
      status_type: 'bg-success',
      amount: 83100
    },
    { id: 252, name: 'Bari', quantity: 46510, status: 'Pink', status_type: 'bg-primary', amount: 30908 },
    { id: 253, name: 'Minor', quantity: 28253, status: 'Purple', status_type: 'bg-success', amount: 38100 },
    {
      id: 254,
      name: 'Shelly',
      quantity: 19453,
      status: 'Yellow',
      status_type: 'bg-success',
      amount: 48107
    },
    { id: 255, name: 'Carey', quantity: 26798, status: 'Maroon', status_type: 'bg-danger', amount: 59606 },
    {
      id: 256,
      name: 'Spence',
      quantity: 65378,
      status: 'Goldenrod',
      status_type: 'bg-primary',
      amount: 19526
    },
    { id: 257, name: 'Birk', quantity: 70408, status: 'Mauv', status_type: 'bg-danger', amount: 91202 },
    { id: 258, name: 'Dino', quantity: 96450, status: 'Mauv', status_type: 'bg-warning', amount: 56257 },
    { id: 259, name: 'Isador', quantity: 64404, status: 'Red', status_type: 'bg-info', amount: 99901 },
    { id: 260, name: 'Arabelle', quantity: 91491, status: 'Puce', status_type: 'bg-info', amount: 23568 },
    {
      id: 261,
      name: 'Dorisa',
      quantity: 92268,
      status: 'Orange',
      status_type: 'bg-success',
      amount: 37410
    },
    { id: 262, name: 'Culley', quantity: 17009, status: 'Red', status_type: 'bg-primary', amount: 59015 },
    { id: 263, name: 'Kalie', quantity: 21362, status: 'Mauv', status_type: 'bg-warning', amount: 10791 },
    { id: 264, name: 'Alie', quantity: 90759, status: 'Aquamarine', status_type: 'bg-info', amount: 55860 },
    {
      id: 265,
      name: 'Lorrin',
      quantity: 12609,
      status: 'Pink',
      status_type: 'bg-secondary',
      amount: 81320
    },
    {
      id: 266,
      name: 'Estele',
      quantity: 15493,
      status: 'Turquoise',
      status_type: 'bg-secondary',
      amount: 67411
    },
    { id: 267, name: 'Guillaume', quantity: 50209, status: 'Red', status_type: 'bg-info', amount: 36949 },
    { id: 268, name: 'Karlee', quantity: 78919, status: 'Teal', status_type: 'bg-primary', amount: 42734 },
    {
      id: 269,
      name: 'Hedvige',
      quantity: 25083,
      status: 'Indigo',
      status_type: 'bg-primary',
      amount: 74490
    },
    { id: 270, name: 'Hillary', quantity: 60644, status: 'Teal', status_type: 'bg-danger', amount: 46950 },
    { id: 271, name: 'Deny', quantity: 71316, status: 'Purple', status_type: 'bg-success', amount: 77313 },
    {
      id: 272,
      name: 'Aleksandr',
      quantity: 81490,
      status: 'Red',
      status_type: 'bg-success',
      amount: 55129
    },
    { id: 273, name: 'Iosep', quantity: 82009, status: 'Pink', status_type: 'bg-warning', amount: 85803 },
    { id: 274, name: 'Chester', quantity: 54228, status: 'Mauv', status_type: 'bg-danger', amount: 61064 },
    { id: 275, name: 'Arda', quantity: 59279, status: 'Maroon', status_type: 'bg-info', amount: 69268 },
    {
      id: 276,
      name: 'Mara',
      quantity: 24958,
      status: 'Turquoise',
      status_type: 'bg-secondary',
      amount: 33940
    },
    {
      id: 277,
      name: 'Marguerite',
      quantity: 38207,
      status: 'Fuscia',
      status_type: 'bg-warning',
      amount: 17233
    },
    {
      id: 278,
      name: 'Chadwick',
      quantity: 64171,
      status: 'Fuscia',
      status_type: 'bg-danger',
      amount: 32759
    },
    {
      id: 279,
      name: 'Cassie',
      quantity: 90215,
      status: 'Crimson',
      status_type: 'bg-success',
      amount: 47188
    },
    { id: 280, name: 'Fidole', quantity: 82005, status: 'Teal', status_type: 'bg-success', amount: 25429 },
    {
      id: 281,
      name: 'Boigie',
      quantity: 26680,
      status: 'Orange',
      status_type: 'bg-warning',
      amount: 31233
    },
    { id: 282, name: 'Yves', quantity: 52010, status: 'Purple', status_type: 'bg-primary', amount: 13027 },
    {
      id: 283,
      name: 'Piotr',
      quantity: 90628,
      status: 'Aquamarine',
      status_type: 'bg-primary',
      amount: 81859
    },
    { id: 284, name: 'Adah', quantity: 69389, status: 'Mauv', status_type: 'bg-success', amount: 67105 },
    { id: 285, name: 'Lilla', quantity: 55482, status: 'Maroon', status_type: 'bg-warning', amount: 16780 },
    {
      id: 286,
      name: 'Petrina',
      quantity: 78037,
      status: 'Turquoise',
      status_type: 'bg-danger',
      amount: 21661
    },
    { id: 287, name: 'Marji', quantity: 90884, status: 'Teal', status_type: 'bg-secondary', amount: 35920 },
    {
      id: 288,
      name: 'Nataline',
      quantity: 35853,
      status: 'Purple',
      status_type: 'bg-success',
      amount: 95923
    },
    {
      id: 289,
      name: 'Virge',
      quantity: 24875,
      status: 'Turquoise',
      status_type: 'bg-success',
      amount: 75736
    },
    {
      id: 290,
      name: 'Georgetta',
      quantity: 21989,
      status: 'Fuscia',
      status_type: 'bg-warning',
      amount: 69581
    },
    {
      id: 291,
      name: 'Natale',
      quantity: 41771,
      status: 'Yellow',
      status_type: 'bg-success',
      amount: 88624
    },
    {
      id: 292,
      name: 'Filmer',
      quantity: 64184,
      status: 'Yellow',
      status_type: 'bg-warning',
      amount: 49374
    },
    { id: 293, name: 'Devinne', quantity: 64412, status: 'Teal', status_type: 'bg-primary', amount: 37120 },
    { id: 294, name: 'Kizzee', quantity: 62931, status: 'Yellow', status_type: 'bg-danger', amount: 19271 },
    {
      id: 295,
      name: 'Clemmie',
      quantity: 82013,
      status: 'Goldenrod',
      status_type: 'bg-secondary',
      amount: 37108
    },
    { id: 296, name: 'Janeva', quantity: 24293, status: 'Blue', status_type: 'bg-warning', amount: 91061 },
    {
      id: 297,
      name: 'Gwenneth',
      quantity: 66496,
      status: 'Violet',
      status_type: 'bg-danger',
      amount: 41616
    },
    {
      id: 298,
      name: 'Stace',
      quantity: 52734,
      status: 'Turquoise',
      status_type: 'bg-warning',
      amount: 22645
    },
    {
      id: 299,
      name: 'Minny',
      quantity: 63514,
      status: 'Goldenrod',
      status_type: 'bg-secondary',
      amount: 16919
    },
    {
      id: 300,
      name: 'Randie',
      quantity: 53331,
      status: 'Khaki',
      status_type: 'bg-secondary',
      amount: 14551
    },
    {
      id: 301,
      name: 'Barbey',
      quantity: 43967,
      status: 'Orange',
      status_type: 'bg-secondary',
      amount: 24366
    },
    { id: 302, name: 'Ivan', quantity: 40997, status: 'Pink', status_type: 'bg-info', amount: 73090 },
    { id: 303, name: 'Allegra', quantity: 81365, status: 'Violet', status_type: 'bg-info', amount: 40509 },
    { id: 304, name: 'Benoit', quantity: 66380, status: 'Blue', status_type: 'bg-danger', amount: 67949 },
    { id: 305, name: 'Dasya', quantity: 34211, status: 'Puce', status_type: 'bg-secondary', amount: 55805 },
    { id: 306, name: 'Tyrone', quantity: 18288, status: 'Green', status_type: 'bg-danger', amount: 11144 },
    {
      id: 307,
      name: 'Nettle',
      quantity: 11115,
      status: 'Purple',
      status_type: 'bg-warning',
      amount: 72610
    },
    {
      id: 308,
      name: 'Livia',
      quantity: 37108,
      status: 'Turquoise',
      status_type: 'bg-warning',
      amount: 71012
    },
    {
      id: 309,
      name: 'Benton',
      quantity: 86571,
      status: 'Aquamarine',
      status_type: 'bg-secondary',
      amount: 81128
    },
    {
      id: 310,
      name: 'Montague',
      quantity: 28886,
      status: 'Crimson',
      status_type: 'bg-warning',
      amount: 13159
    },
    {
      id: 311,
      name: 'Ambrosius',
      quantity: 34318,
      status: 'Mauv',
      status_type: 'bg-primary',
      amount: 40326
    },
    { id: 312, name: 'Gearalt', quantity: 72042, status: 'Pink', status_type: 'bg-success', amount: 99595 },
    { id: 313, name: 'Verna', quantity: 49860, status: 'Teal', status_type: 'bg-danger', amount: 17264 },
    {
      id: 314,
      name: 'Gustavo',
      quantity: 82550,
      status: 'Turquoise',
      status_type: 'bg-primary',
      amount: 96384
    },
    { id: 315, name: 'Nicky', quantity: 43131, status: 'Teal', status_type: 'bg-success', amount: 61181 },
    {
      id: 316,
      name: 'Grover',
      quantity: 31261,
      status: 'Yellow',
      status_type: 'bg-primary',
      amount: 27964
    },
    {
      id: 317,
      name: 'Doug',
      quantity: 57145,
      status: 'Aquamarine',
      status_type: 'bg-danger',
      amount: 13832
    },
    { id: 318, name: 'Flossie', quantity: 78961, status: 'Red', status_type: 'bg-primary', amount: 18270 },
    {
      id: 319,
      name: 'Nettle',
      quantity: 18664,
      status: 'Goldenrod',
      status_type: 'bg-success',
      amount: 60556
    },
    { id: 320, name: 'Dari', quantity: 30909, status: 'Turquoise', status_type: 'bg-info', amount: 13373 },
    { id: 321, name: 'Glyn', quantity: 88191, status: 'Aquamarine', status_type: 'bg-info', amount: 10562 },
    { id: 322, name: 'Garwood', quantity: 34558, status: 'Red', status_type: 'bg-primary', amount: 91765 },
    { id: 323, name: 'Pris', quantity: 20607, status: 'Blue', status_type: 'bg-success', amount: 60334 },
    {
      id: 324,
      name: 'Rogers',
      quantity: 46230,
      status: 'Pink',
      status_type: 'bg-secondary',
      amount: 11802
    },
    { id: 325, name: 'Domini', quantity: 27908, status: 'Green', status_type: 'bg-info', amount: 80936 },
    { id: 326, name: 'Rainer', quantity: 25704, status: 'Teal', status_type: 'bg-success', amount: 83111 },
    {
      id: 327,
      name: 'Regina',
      quantity: 31635,
      status: 'Yellow',
      status_type: 'bg-secondary',
      amount: 88588
    },
    {
      id: 328,
      name: 'Shelia',
      quantity: 82916,
      status: 'Crimson',
      status_type: 'bg-secondary',
      amount: 99263
    },
    { id: 329, name: 'Lorri', quantity: 24718, status: 'Indigo', status_type: 'bg-danger', amount: 73692 },
    {
      id: 330,
      name: 'Marquita',
      quantity: 50785,
      status: 'Blue',
      status_type: 'bg-primary',
      amount: 68434
    },
    {
      id: 331,
      name: 'Deonne',
      quantity: 14594,
      status: 'Goldenrod',
      status_type: 'bg-secondary',
      amount: 24832
    },
    {
      id: 332,
      name: 'Bealle',
      quantity: 48825,
      status: 'Goldenrod',
      status_type: 'bg-success',
      amount: 61494
    },
    { id: 333, name: 'Milissent', quantity: 33752, status: 'Puce', status_type: 'bg-info', amount: 36760 },
    {
      id: 334,
      name: 'Helenelizabeth',
      quantity: 56599,
      status: 'Mauv',
      status_type: 'bg-secondary',
      amount: 14391
    },
    {
      id: 335,
      name: 'Catlaina',
      quantity: 73760,
      status: 'Indigo',
      status_type: 'bg-secondary',
      amount: 32640
    },
    {
      id: 336,
      name: 'Donnamarie',
      quantity: 79507,
      status: 'Fuscia',
      status_type: 'bg-primary',
      amount: 34355
    },
    {
      id: 337,
      name: 'Sophronia',
      quantity: 57050,
      status: 'Yellow',
      status_type: 'bg-primary',
      amount: 89948
    },
    {
      id: 338,
      name: 'Anestassia',
      quantity: 84811,
      status: 'Pink',
      status_type: 'bg-primary',
      amount: 79079
    },
    { id: 339, name: 'Egor', quantity: 87223, status: 'Indigo', status_type: 'bg-danger', amount: 14627 },
    { id: 340, name: 'Barbe', quantity: 42746, status: 'Khaki', status_type: 'bg-info', amount: 30811 },
    {
      id: 341,
      name: 'Nola',
      quantity: 62638,
      status: 'Goldenrod',
      status_type: 'bg-secondary',
      amount: 29130
    },
    { id: 342, name: 'Iggy', quantity: 62224, status: 'Mauv', status_type: 'bg-danger', amount: 16668 },
    { id: 343, name: 'Gracia', quantity: 75648, status: 'Khaki', status_type: 'bg-info', amount: 78032 },
    { id: 344, name: 'Aundrea', quantity: 28236, status: 'Teal', status_type: 'bg-warning', amount: 87912 },
    {
      id: 345,
      name: 'Maud',
      quantity: 25946,
      status: 'Maroon',
      status_type: 'bg-secondary',
      amount: 50086
    },
    {
      id: 346,
      name: 'Chalmers',
      quantity: 10299,
      status: 'Violet',
      status_type: 'bg-secondary',
      amount: 56464
    },
    {
      id: 347,
      name: 'Starlin',
      quantity: 20889,
      status: 'Green',
      status_type: 'bg-success',
      amount: 14514
    },
    {
      id: 348,
      name: 'Mercie',
      quantity: 35979,
      status: 'Puce',
      status_type: 'bg-secondary',
      amount: 18975
    },
    {
      id: 349,
      name: 'Janina',
      quantity: 61838,
      status: 'Crimson',
      status_type: 'bg-secondary',
      amount: 58702
    },
    {
      id: 350,
      name: 'Mollie',
      quantity: 89562,
      status: 'Turquoise',
      status_type: 'bg-secondary',
      amount: 43846
    },
    {
      id: 351,
      name: 'Mirabelle',
      quantity: 75005,
      status: 'Khaki',
      status_type: 'bg-warning',
      amount: 28140
    },
    {
      id: 352,
      name: 'Waylen',
      quantity: 20489,
      status: 'Crimson',
      status_type: 'bg-secondary',
      amount: 42095
    },
    { id: 353, name: 'Collen', quantity: 62289, status: 'Blue', status_type: 'bg-danger', amount: 89939 },
    { id: 354, name: 'Audy', quantity: 42209, status: 'Yellow', status_type: 'bg-info', amount: 34429 },
    { id: 355, name: 'Shauna', quantity: 64196, status: 'Fuscia', status_type: 'bg-info', amount: 59974 },
    { id: 356, name: 'Rois', quantity: 14848, status: 'Pink', status_type: 'bg-primary', amount: 13146 },
    { id: 357, name: 'Anderea', quantity: 55057, status: 'Red', status_type: 'bg-warning', amount: 57102 },
    { id: 358, name: 'Ezekiel', quantity: 86093, status: 'Teal', status_type: 'bg-warning', amount: 45681 },
    {
      id: 359,
      name: 'Loella',
      quantity: 32903,
      status: 'Orange',
      status_type: 'bg-secondary',
      amount: 19658
    },
    {
      id: 360,
      name: 'Avigdor',
      quantity: 62876,
      status: 'Yellow',
      status_type: 'bg-warning',
      amount: 82331
    },
    { id: 361, name: 'Neala', quantity: 49385, status: 'Indigo', status_type: 'bg-info', amount: 22687 },
    {
      id: 362,
      name: 'Abbott',
      quantity: 61285,
      status: 'Aquamarine',
      status_type: 'bg-warning',
      amount: 17156
    },
    { id: 363, name: 'Ursola', quantity: 38412, status: 'Blue', status_type: 'bg-success', amount: 95522 },
    {
      id: 364,
      name: 'Bernardine',
      quantity: 22306,
      status: 'Violet',
      status_type: 'bg-secondary',
      amount: 75575
    },
    { id: 365, name: 'Michal', quantity: 11685, status: 'Mauv', status_type: 'bg-primary', amount: 25889 },
    { id: 366, name: 'Bendick', quantity: 17724, status: 'Blue', status_type: 'bg-info', amount: 61460 },
    {
      id: 367,
      name: 'Carina',
      quantity: 35814,
      status: 'Fuscia',
      status_type: 'bg-warning',
      amount: 24630
    },
    {
      id: 368,
      name: 'Carroll',
      quantity: 20522,
      status: 'Yellow',
      status_type: 'bg-success',
      amount: 80776
    },
    {
      id: 369,
      name: 'Roxine',
      quantity: 59411,
      status: 'Green',
      status_type: 'bg-secondary',
      amount: 71971
    },
    {
      id: 370,
      name: 'Patricio',
      quantity: 21395,
      status: 'Mauv',
      status_type: 'bg-warning',
      amount: 27953
    },
    { id: 371, name: 'Alyce', quantity: 32863, status: 'Red', status_type: 'bg-info', amount: 42196 },
    { id: 372, name: 'Benita', quantity: 80597, status: 'Pink', status_type: 'bg-primary', amount: 82338 },
    {
      id: 373,
      name: 'Clarance',
      quantity: 70871,
      status: 'Pink',
      status_type: 'bg-secondary',
      amount: 50329
    },
    {
      id: 374,
      name: 'Ashleigh',
      quantity: 89951,
      status: 'Green',
      status_type: 'bg-warning',
      amount: 35364
    },
    { id: 375, name: 'Gertrud', quantity: 99228, status: 'Pink', status_type: 'bg-primary', amount: 31230 },
    { id: 376, name: 'Dag', quantity: 38326, status: 'Puce', status_type: 'bg-danger', amount: 54500 },
    { id: 377, name: 'Obadiah', quantity: 73779, status: 'Maroon', status_type: 'bg-info', amount: 10727 },
    {
      id: 378,
      name: 'Pepita',
      quantity: 87371,
      status: 'Aquamarine',
      status_type: 'bg-secondary',
      amount: 62717
    },
    {
      id: 379,
      name: 'Wilden',
      quantity: 11090,
      status: 'Purple',
      status_type: 'bg-success',
      amount: 70134
    },
    {
      id: 380,
      name: 'Ilysa',
      quantity: 94612,
      status: 'Goldenrod',
      status_type: 'bg-danger',
      amount: 52457
    },
    { id: 381, name: 'Delila', quantity: 69930, status: 'Khaki', status_type: 'bg-info', amount: 85336 },
    {
      id: 382,
      name: 'Donaugh',
      quantity: 85333,
      status: 'Purple',
      status_type: 'bg-success',
      amount: 16598
    },
    {
      id: 383,
      name: 'Crysta',
      quantity: 20030,
      status: 'Goldenrod',
      status_type: 'bg-danger',
      amount: 27856
    },
    { id: 384, name: 'Wit', quantity: 54113, status: 'Green', status_type: 'bg-danger', amount: 85360 },
    { id: 385, name: 'Leodora', quantity: 85830, status: 'Blue', status_type: 'bg-success', amount: 32001 },
    { id: 386, name: 'Evania', quantity: 23135, status: 'Blue', status_type: 'bg-warning', amount: 99831 },
    {
      id: 387,
      name: 'Joelie',
      quantity: 13999,
      status: 'Indigo',
      status_type: 'bg-secondary',
      amount: 58846
    },
    {
      id: 388,
      name: 'Denise',
      quantity: 85213,
      status: 'Turquoise',
      status_type: 'bg-danger',
      amount: 73924
    },
    { id: 389, name: 'Fayina', quantity: 48339, status: 'Mauv', status_type: 'bg-success', amount: 99657 },
    { id: 390, name: 'Maxie', quantity: 88666, status: 'Goldenrod', status_type: 'bg-info', amount: 31631 },
    {
      id: 391,
      name: 'Emalee',
      quantity: 64444,
      status: 'Crimson',
      status_type: 'bg-danger',
      amount: 55389
    },
    { id: 392, name: 'Hew', quantity: 73917, status: 'Blue', status_type: 'bg-success', amount: 82532 },
    { id: 393, name: 'Damon', quantity: 98180, status: 'Orange', status_type: 'bg-danger', amount: 10532 },
    {
      id: 394,
      name: 'Tracie',
      quantity: 85817,
      status: 'Indigo',
      status_type: 'bg-success',
      amount: 72780
    },
    {
      id: 395,
      name: 'Jonas',
      quantity: 86967,
      status: 'Purple',
      status_type: 'bg-secondary',
      amount: 94693
    },
    {
      id: 396,
      name: 'Alicea',
      quantity: 71834,
      status: 'Blue',
      status_type: 'bg-secondary',
      amount: 29051
    },
    {
      id: 397,
      name: 'Loleta',
      quantity: 14610,
      status: 'Goldenrod',
      status_type: 'bg-danger',
      amount: 78914
    },
    { id: 398, name: 'Martie', quantity: 31729, status: 'Teal', status_type: 'bg-primary', amount: 39694 },
    { id: 399, name: 'Celka', quantity: 29122, status: 'Violet', status_type: 'bg-primary', amount: 69973 },
    {
      id: 400,
      name: 'Thomas',
      quantity: 20899,
      status: 'Violet',
      status_type: 'bg-secondary',
      amount: 93979
    },
    {
      id: 401,
      name: 'Billie',
      quantity: 96356,
      status: 'Fuscia',
      status_type: 'bg-primary',
      amount: 24590
    },
    {
      id: 402,
      name: 'Onfroi',
      quantity: 68270,
      status: 'Orange',
      status_type: 'bg-warning',
      amount: 43245
    },
    {
      id: 403,
      name: 'Joellyn',
      quantity: 52920,
      status: 'Turquoise',
      status_type: 'bg-info',
      amount: 40254
    },
    { id: 404, name: 'Kellby', quantity: 29278, status: 'Orange', status_type: 'bg-info', amount: 59172 },
    {
      id: 405,
      name: 'Zach',
      quantity: 81514,
      status: 'Violet',
      status_type: 'bg-secondary',
      amount: 36572
    },
    { id: 406, name: 'Thorn', quantity: 34317, status: 'Goldenrod', status_type: 'bg-info', amount: 47343 },
    { id: 407, name: 'Kai', quantity: 91843, status: 'Blue', status_type: 'bg-secondary', amount: 51984 },
    {
      id: 408,
      name: 'Elladine',
      quantity: 98478,
      status: 'Puce',
      status_type: 'bg-primary',
      amount: 68486
    },
    { id: 409, name: 'Terrie', quantity: 39982, status: 'Maroon', status_type: 'bg-danger', amount: 96849 },
    {
      id: 410,
      name: 'Marcela',
      quantity: 63370,
      status: 'Khaki',
      status_type: 'bg-primary',
      amount: 28100
    },
    {
      id: 411,
      name: 'Matthias',
      quantity: 96361,
      status: 'Mauv',
      status_type: 'bg-secondary',
      amount: 35014
    },
    { id: 412, name: 'Allys', quantity: 57846, status: 'Maroon', status_type: 'bg-success', amount: 60535 },
    {
      id: 413,
      name: 'Nerte',
      quantity: 99533,
      status: 'Goldenrod',
      status_type: 'bg-primary',
      amount: 36921
    },
    { id: 414, name: 'Arden', quantity: 62918, status: 'Maroon', status_type: 'bg-primary', amount: 43095 },
    { id: 415, name: 'Clayson', quantity: 31044, status: 'Blue', status_type: 'bg-primary', amount: 10757 },
    {
      id: 416,
      name: 'Marrilee',
      quantity: 72717,
      status: 'Puce',
      status_type: 'bg-secondary',
      amount: 93518
    },
    { id: 417, name: 'Tabby', quantity: 34815, status: 'Pink', status_type: 'bg-danger', amount: 65839 },
    {
      id: 418,
      name: 'Enrichetta',
      quantity: 14237,
      status: 'Fuscia',
      status_type: 'bg-danger',
      amount: 38000
    },
    {
      id: 419,
      name: 'Chelsae',
      quantity: 18299,
      status: 'Yellow',
      status_type: 'bg-success',
      amount: 76796
    },
    {
      id: 420,
      name: 'Jesselyn',
      quantity: 16962,
      status: 'Goldenrod',
      status_type: 'bg-danger',
      amount: 32876
    },
    {
      id: 421,
      name: 'Khalil',
      quantity: 22343,
      status: 'Orange',
      status_type: 'bg-warning',
      amount: 39894
    },
    {
      id: 422,
      name: 'Birdie',
      quantity: 23871,
      status: 'Orange',
      status_type: 'bg-success',
      amount: 48809
    },
    {
      id: 423,
      name: 'Julee',
      quantity: 49364,
      status: 'Turquoise',
      status_type: 'bg-warning',
      amount: 34088
    },
    {
      id: 424,
      name: 'Zackariah',
      quantity: 75566,
      status: 'Khaki',
      status_type: 'bg-warning',
      amount: 67144
    },
    { id: 425, name: 'Latia', quantity: 52004, status: 'Blue', status_type: 'bg-secondary', amount: 95362 },
    { id: 426, name: 'Lila', quantity: 50201, status: 'Pink', status_type: 'bg-success', amount: 69718 },
    { id: 427, name: 'Kippar', quantity: 91691, status: 'Blue', status_type: 'bg-danger', amount: 11048 },
    { id: 428, name: 'Aprilette', quantity: 58703, status: 'Red', status_type: 'bg-info', amount: 31007 },
    { id: 429, name: 'Julio', quantity: 79073, status: 'Maroon', status_type: 'bg-success', amount: 78532 },
    {
      id: 430,
      name: 'Eleanora',
      quantity: 59951,
      status: 'Turquoise',
      status_type: 'bg-success',
      amount: 93740
    },
    { id: 431, name: 'Sharity', quantity: 53358, status: 'Purple', status_type: 'bg-info', amount: 85648 },
    {
      id: 432,
      name: 'Alaine',
      quantity: 28842,
      status: 'Purple',
      status_type: 'bg-secondary',
      amount: 82549
    },
    {
      id: 433,
      name: 'Hugh',
      quantity: 14835,
      status: 'Turquoise',
      status_type: 'bg-warning',
      amount: 20334
    },
    {
      id: 434,
      name: 'Julian',
      quantity: 85013,
      status: 'Aquamarine',
      status_type: 'bg-primary',
      amount: 78408
    },
    {
      id: 435,
      name: 'Casper',
      quantity: 96673,
      status: 'Indigo',
      status_type: 'bg-primary',
      amount: 74753
    },
    { id: 436, name: 'Gerrard', quantity: 60545, status: 'Mauv', status_type: 'bg-info', amount: 44177 },
    {
      id: 437,
      name: 'Bunni',
      quantity: 24255,
      status: 'Indigo',
      status_type: 'bg-secondary',
      amount: 84319
    },
    { id: 438, name: 'Brannon', quantity: 72584, status: 'Pink', status_type: 'bg-success', amount: 92288 },
    {
      id: 439,
      name: 'Gonzales',
      quantity: 11062,
      status: 'Violet',
      status_type: 'bg-secondary',
      amount: 33215
    },
    {
      id: 440,
      name: 'Buckie',
      quantity: 38465,
      status: 'Aquamarine',
      status_type: 'bg-danger',
      amount: 82556
    },
    {
      id: 441,
      name: 'Danell',
      quantity: 39243,
      status: 'Goldenrod',
      status_type: 'bg-warning',
      amount: 90680
    },
    {
      id: 442,
      name: 'Buck',
      quantity: 12229,
      status: 'Crimson',
      status_type: 'bg-secondary',
      amount: 35575
    },
    {
      id: 443,
      name: 'Hortensia',
      quantity: 52913,
      status: 'Aquamarine',
      status_type: 'bg-danger',
      amount: 12610
    },
    {
      id: 444,
      name: 'Shel',
      quantity: 61430,
      status: 'Turquoise',
      status_type: 'bg-secondary',
      amount: 36854
    },
    {
      id: 445,
      name: 'Natka',
      quantity: 29455,
      status: 'Aquamarine',
      status_type: 'bg-danger',
      amount: 11943
    },
    { id: 446, name: 'Levon', quantity: 80864, status: 'Indigo', status_type: 'bg-info', amount: 54564 },
    {
      id: 447,
      name: 'Fredric',
      quantity: 42936,
      status: 'Turquoise',
      status_type: 'bg-info',
      amount: 85878
    },
    {
      id: 448,
      name: 'Eziechiele',
      quantity: 31869,
      status: 'Khaki',
      status_type: 'bg-warning',
      amount: 50111
    },
    {
      id: 449,
      name: 'Georgette',
      quantity: 24431,
      status: 'Crimson',
      status_type: 'bg-info',
      amount: 78171
    },
    { id: 450, name: 'Petey', quantity: 45213, status: 'Violet', status_type: 'bg-success', amount: 15132 },
    { id: 451, name: 'Findley', quantity: 18984, status: 'Blue', status_type: 'bg-success', amount: 13505 },
    { id: 452, name: 'Judye', quantity: 86361, status: 'Mauv', status_type: 'bg-success', amount: 89074 },
    { id: 453, name: 'Thaxter', quantity: 19114, status: 'Blue', status_type: 'bg-danger', amount: 50358 },
    {
      id: 454,
      name: 'Monty',
      quantity: 58369,
      status: 'Goldenrod',
      status_type: 'bg-warning',
      amount: 91297
    },
    {
      id: 455,
      name: 'Enriqueta',
      quantity: 90192,
      status: 'Pink',
      status_type: 'bg-success',
      amount: 66277
    },
    { id: 456, name: 'Dillon', quantity: 51167, status: 'Orange', status_type: 'bg-danger', amount: 50316 },
    { id: 457, name: 'Emma', quantity: 51547, status: 'Mauv', status_type: 'bg-secondary', amount: 67419 },
    { id: 458, name: 'Paolo', quantity: 58902, status: 'Orange', status_type: 'bg-success', amount: 55507 },
    { id: 459, name: 'Jennette', quantity: 47687, status: 'Teal', status_type: 'bg-danger', amount: 69504 },
    {
      id: 460,
      name: 'Anatole',
      quantity: 79350,
      status: 'Orange',
      status_type: 'bg-success',
      amount: 54246
    },
    { id: 461, name: 'Loren', quantity: 98526, status: 'Puce', status_type: 'bg-info', amount: 39030 },
    {
      id: 462,
      name: 'Carmelia',
      quantity: 74450,
      status: 'Puce',
      status_type: 'bg-primary',
      amount: 20194
    },
    {
      id: 463,
      name: 'Andriette',
      quantity: 45778,
      status: 'Green',
      status_type: 'bg-danger',
      amount: 37981
    },
    { id: 464, name: 'Doralyn', quantity: 11658, status: 'Pink', status_type: 'bg-primary', amount: 96928 },
    {
      id: 465,
      name: 'Dalston',
      quantity: 17647,
      status: 'Khaki',
      status_type: 'bg-primary',
      amount: 60238
    },
    { id: 466, name: 'Chadd', quantity: 14760, status: 'Crimson', status_type: 'bg-danger', amount: 84548 },
    {
      id: 467,
      name: 'Reeta',
      quantity: 10316,
      status: 'Turquoise',
      status_type: 'bg-warning',
      amount: 58470
    },
    {
      id: 468,
      name: 'Elberta',
      quantity: 95487,
      status: 'Khaki',
      status_type: 'bg-primary',
      amount: 56622
    },
    {
      id: 469,
      name: 'Callie',
      quantity: 89367,
      status: 'Aquamarine',
      status_type: 'bg-danger',
      amount: 58961
    },
    { id: 470, name: 'Lissy', quantity: 14521, status: 'Teal', status_type: 'bg-info', amount: 26325 },
    {
      id: 471,
      name: 'Karoline',
      quantity: 74238,
      status: 'Orange',
      status_type: 'bg-danger',
      amount: 26211
    },
    { id: 472, name: 'Brigit', quantity: 51878, status: 'Green', status_type: 'bg-danger', amount: 53033 },
    {
      id: 473,
      name: 'Terry',
      quantity: 50452,
      status: 'Aquamarine',
      status_type: 'bg-info',
      amount: 29576
    },
    { id: 474, name: 'Silva', quantity: 27851, status: 'Red', status_type: 'bg-info', amount: 64778 },
    {
      id: 475,
      name: 'Reagan',
      quantity: 79592,
      status: 'Fuscia',
      status_type: 'bg-primary',
      amount: 79583
    },
    {
      id: 476,
      name: 'Clayborn',
      quantity: 55749,
      status: 'Fuscia',
      status_type: 'bg-secondary',
      amount: 59919
    },
    {
      id: 477,
      name: 'Elladine',
      quantity: 30903,
      status: 'Violet',
      status_type: 'bg-secondary',
      amount: 72434
    },
    {
      id: 478,
      name: 'Darius',
      quantity: 55519,
      status: 'Aquamarine',
      status_type: 'bg-info',
      amount: 94882
    },
    { id: 479, name: 'Jessey', quantity: 17300, status: 'Teal', status_type: 'bg-info', amount: 91601 },
    { id: 480, name: 'Goldi', quantity: 65502, status: 'Pink', status_type: 'bg-success', amount: 83962 },
    { id: 481, name: 'Reeta', quantity: 72653, status: 'Red', status_type: 'bg-primary', amount: 56448 },
    { id: 482, name: 'Drusy', quantity: 93625, status: 'Turquoise', status_type: 'bg-info', amount: 76435 },
    {
      id: 483,
      name: 'Vidovik',
      quantity: 15290,
      status: 'Turquoise',
      status_type: 'bg-primary',
      amount: 99710
    },
    { id: 484, name: 'Ewell', quantity: 34850, status: 'Blue', status_type: 'bg-warning', amount: 77096 },
    {
      id: 485,
      name: 'Roshelle',
      quantity: 61176,
      status: 'Goldenrod',
      status_type: 'bg-warning',
      amount: 35386
    },
    { id: 486, name: 'Flory', quantity: 89614, status: 'Mauv', status_type: 'bg-success', amount: 83138 },
    { id: 487, name: 'Skippy', quantity: 34137, status: 'Maroon', status_type: 'bg-info', amount: 19957 },
    { id: 488, name: 'Nesta', quantity: 81492, status: 'Red', status_type: 'bg-secondary', amount: 59724 },
    { id: 489, name: 'Ruthie', quantity: 18356, status: 'Blue', status_type: 'bg-warning', amount: 58518 },
    {
      id: 490,
      name: 'Chaddy',
      quantity: 58543,
      status: 'Purple',
      status_type: 'bg-secondary',
      amount: 81487
    },
    { id: 491, name: 'Thane', quantity: 66451, status: 'Puce', status_type: 'bg-primary', amount: 43790 },
    { id: 492, name: 'Melody', quantity: 15083, status: 'Pink', status_type: 'bg-success', amount: 12862 },
    {
      id: 493,
      name: 'Ronnie',
      quantity: 75900,
      status: 'Purple',
      status_type: 'bg-primary',
      amount: 48084
    },
    {
      id: 494,
      name: 'Almeta',
      quantity: 12603,
      status: 'Fuscia',
      status_type: 'bg-secondary',
      amount: 51120
    },
    { id: 495, name: 'Tera', quantity: 36105, status: 'Khaki', status_type: 'bg-secondary', amount: 57355 },
    { id: 496, name: 'Ciel', quantity: 91045, status: 'Yellow', status_type: 'bg-info', amount: 56902 },
    { id: 497, name: 'Arie', quantity: 93757, status: 'Indigo', status_type: 'bg-info', amount: 17571 },
    { id: 498, name: 'Arne', quantity: 50728, status: 'Puce', status_type: 'bg-danger', amount: 18827 },
    {
      id: 499,
      name: 'Corey',
      quantity: 19984,
      status: 'Goldenrod',
      status_type: 'bg-success',
      amount: 75784
    },
    {
      id: 500,
      name: 'Clevey',
      quantity: 23785,
      status: 'Orange',
      status_type: 'bg-success',
      amount: 19716
    }
  ];

  filterModel: FilterModel = {
    page: 1,
    pageSize: 10,
    selected: [],
    sortBy: null
  };
  totalPages: number = 1; // Tổng số trang
  totalItems: number = 0; // Tổng số bản ghi

  /**
   * Hàm chạy lúc khởi tạo
   * Đưa function load vào đây
   */
  ngOnInit() {
    if (!this.tableData || this.tableData.length === 0) {
      this.tableData = this.data;
    }
    if (!this.tableHeaders || this.tableHeaders.length === 0) {
      this.tableHeaders = [
        {
          title: 'id',
          displayName: 'ID',
          isSortable: false,
          isFilter: false,
          isDisplay: false
        },
        {
          title: 'name',
          displayName: 'Name',
          isSortable: false,
          isFilter: false,
          isDisplay: true
        },
        {
          title: 'quantity',
          displayName: 'Quantity',
          isSortable: false,
          isFilter: false,
          isDisplay: true
        },
        {
          title: 'status',
          displayName: 'Status',
          isSortable: false,
          isFilter: false,
          isDisplay: true
        },
        {
          title: 'status_type',
          displayName: 'Status type',
          isSortable: false,
          isFilter: false,
          isDisplay: false
        },
        {
          title: 'amount',
          displayName: 'Amount',
          isSortable: false,
          isFilter: false,
          isDisplay: true
        }];
    }
    this.totalItems = this.tableData.length;
    this.updatePagination();
  }

  /**
   * Cập nhật số trang
   */
  updatePagination() {
    this.totalPages = Math.ceil(this.tableData.length / this.filterModel.pageSize);
  }

  /**
   * Lấy dữ liệu trang hiện tại
   */
  getCurrentPageData() {
    const startIndex = (this.filterModel.page - 1) * this.filterModel.pageSize;
    return this.tableData.slice(startIndex, startIndex + this.filterModel.pageSize);
  }

  onPageInputChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const pageInt = parseInt(selectElement.value);
    if (pageInt < 1 || pageInt > this.totalPages) {
      return;
    }

    this.filterModel.page = pageInt;
  }

  /**
   * Chuyển trang
   * @param page
   */
  goToPage(page: any) {
    this.filterModel.page = parseInt(page);
  }

  /**
   * Thay đổi số lượng bản ghi mỗi trang
   * @param event
   */
  onPageSizeChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.filterModel.pageSize = +selectElement.value;
    this.filterModel.page = 1;
    this.updatePagination();
  }

  onView(id: string) {
    this.afterClickView.emit(id)
  }

  onEdit(id: string) {
    this.afterClickEdit.emit(id)
  }

  onDelete(id: string) {
    this.afterClickDelete.emit(id)
  }

  onSelectRow(id: string) {
    this.filterModel.selected.push(id);
    this.afterSelectedRows.emit(this.filterModel);
  }
}
