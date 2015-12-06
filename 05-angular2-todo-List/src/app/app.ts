import {bootstrap, Component , NgFor , NgIf} from 'angular2/angular2';

export class TodoItem {
    constructor(public text: string , public completed:boolean){
        
    }
}


@Component({
    selector: 'my-app',
    templateUrl: 'todo.html',
    directives:[NgFor,NgIf]
})


class AppComponent { 
 todos : Array<TodoItem>
 constructor(){
     this.todos = new Array<TodoItem>();
     this.todos.push(new TodoItem('Hello World' , false))
 };
 
 setCompleted(item:TodoItem,checked:boolean){
     item.completed = checked;
 };
 
 removeList(item:TodoItem){
     this.todos.splice(this.todos.indexOf(item),1);
 };
 
 addItem(input){
    this.todos.push(new TodoItem (input.value,false));
    input.value = "";
 };
 
 doneTypeing($event){
     if($event.which === 13){
        this.addItem($event.target); 
     }
 };
 
 completedAll () {
   for(var list of this.todos){
     this.setCompleted(list,true) 
   }  
 }
    
}
bootstrap(AppComponent);
