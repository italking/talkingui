import { Component, OnInit } from '@angular/core';
import {TkWindowService} from '../../../../tkui/window/tk-window.service';
import {TkWindow} from '../../../../tkui/window/tk-window';
import {DemolWindowComponent} from './demol-window/demol-window.component';

@Component({
  selector: 'app-product-window',
  templateUrl: './product-window.component.html',
  styleUrls: ['./product-window.component.css']
})
export class ProductWindowComponent implements OnInit {

  constructor(
    private windowService: TkWindowService
  ) { }

  ngOnInit() {
  }

  public open1() {
    const win = new TkWindow()
          .setHeight(300)
          .setWidth(600)
          .setTitle('简单窗口')
          .setContentComponent(DemolWindowComponent);
    this.windowService.open(win);
  }
  public open2() {
    const win = new TkWindow()
      .setHeight(300)
      .setWidth(600)
      .setTitle('模式化窗口')
      .setModel(true)
      .setContentComponent(DemolWindowComponent);
    this.windowService.open(win);
  }

}
