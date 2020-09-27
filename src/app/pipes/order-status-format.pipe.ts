import{Pipe,PipeTransform}
from '@angular/core';@Pipe({name:'orderStatusFormat'}
)export class OrderStatusFormatPipe implements PipeTransform{transform(value:any):any{let text = "--";if (!!value){switch (parseInt(value)){case 1:text = "待分配";break;case 2:text = "待处理";break;case 3:text = "处理中";break;case 4:text = "已完结";break;}
}
return text;}
}
