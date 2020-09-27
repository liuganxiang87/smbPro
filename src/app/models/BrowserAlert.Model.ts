export class BrowserAlertModel{
    public isVisible: boolean = false;
    public modalIcon: string = "info";  //["info", "success", "error", "warning"]
    public title: string = "提示";
    public contentArr: string[] = []; //['第一行','第二行','第三行']
    public routerLink: string[] = []; //跳转 路由

    constructor(isVisible?: boolean, title?: string, contentArr?: string[], modalIcon?: string, routerLink?: string[]){
        this.isVisible = isVisible;
        this.title = title;
        this.contentArr = contentArr;
        this.modalIcon = modalIcon;
        this.routerLink = routerLink;
      }

    setValue(isVisible: boolean, title: string, contentArr: string[], modalIcon: string = "info", routerLink?: string[]){
        this.isVisible = isVisible;
        this.title = title;
        this.contentArr = contentArr;
        this.modalIcon = modalIcon;
        this.routerLink = routerLink;
    }
}