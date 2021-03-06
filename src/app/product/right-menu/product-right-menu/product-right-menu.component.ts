import { Component, OnInit } from '@angular/core';
import {SimpleRightMenuComponent} from './simple-right-menu/simple-right-menu.component';

@Component({
  selector: 'app-product-right-menu',
  templateUrl: './product-right-menu.component.html',
  styleUrls: ['./product-right-menu.component.css']
})
export class ProductRightMenuComponent implements OnInit {

  public SimpleRightMenuComponent = SimpleRightMenuComponent;

  public info = [
      {name: '查看' , type: 'view'},
      {name: '删除' , type: 'delete'},
      {name: '修改' , type: 'edit'},
    ];

  public datas = [
    {id: 1 , name: '小A' , city : '北京' },
    {id: 2 , name: '小B' , city : '上海' },
    {id: 3 , name: '小C' , city : '广州' },
    {id: 4 , name: '小D' , city : '深圳' }
  ];

  public datas1 = [
    {id: 1 , name: '小A' , city : '北京' },
    {id: 2 , name: '小B' , city : '上海' },
    {id: 3 , name: '小C' , city : '广州' },
    {id: 4 , name: '小D' , city : '深圳' }
  ];

  public datas2 = [
    {id: 1 , name: '小A' , city : '北京' },
    {id: 2 , name: '小B' , city : '上海' },
    {id: 3 , name: '小C' , city : '广州' },
    {id: 4 , name: '小D' , city : '深圳' }
  ];

  constructor() { }

  ngOnInit() {
  }

  public onMenuClick(type , index) {
    if (type === 'view') {
      alert('查看');
    } else if (type === 'delete') {
       this.datas.splice(index , 1);
    } else if (type === 'edit') {
      alert('修改');
    }
  }

  public onMenuClick1(type , index) {
    if (type === 'view') {
      alert('查看');
    } else if (type === 'delete') {
      this.datas1.splice(index , 1);
    } else if (type === 'edit') {
      alert('修改');
    }
  }

  public getInfo(id) {
    if (id > 2) {
      return [
        {name: '查看' , type: 'view'}
      ];
    } else {
      return [
        {name: '删除' , type: 'delete'},
        {name: '修改' , type: 'edit'},
      ];
    }
  }

  public onMenuClick2(type , index) {
    if (type === 'view') {
      alert('查看');
    } else if (type === 'delete') {
      this.datas1.splice(index , 1);
    } else if (type === 'edit') {
      alert('修改');
    }
  }

}
