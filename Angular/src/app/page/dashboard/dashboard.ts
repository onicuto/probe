import { Component } from '@angular/core';
import { BlockAccount } from '../../components/block-account/block-account';
import { BlockRecord } from '../../components/block-record/block-record';
import { BlockCategory } from '../../components/block-category/block-category';
import {BlockPlanning} from '../../components/block-planning/block-planning';
import {BlockHistory} from '../../components/block-history/block-history';

@Component({
  imports: [BlockAccount, BlockRecord, BlockCategory, BlockPlanning, BlockHistory],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {
}
