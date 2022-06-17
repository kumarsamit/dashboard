import { Component, OnInit } from '@angular/core';
import { ToDoModal } from './todo-list.modal';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerService } from 'src/app/customer.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})



export class TodoListComponent implements OnInit {
  formtodovalue!: FormGroup;
	todoModalObj: ToDoModal = new ToDoModal();
	todoData!: any;
	showAdd!: boolean;
	showEdit!: boolean;
	bgColor:any="";

	getbgColor(id:any){
		this.bgColor = id;
	}


  ngOnInit(): void {
    this.formtodovalue = this.formbuilder.group({
			heading: [''],
			desc: [''],
		});
		this.getAllToDo();
  }

  constructor(private formbuilder: FormBuilder,
		private api: CustomerService) {


  }

  
	getAllToDo() {
		this.api.getToDO('http://localhost:3000/comments').subscribe((res) => {
			this.todoData = res;
		});
	}

  clickAdd(){
		this.formtodovalue.reset();
		this.showAdd = true;
		this.showEdit = false;
	}

	postToDoDetails() {
		this.todoModalObj.heading = this.formtodovalue.value.heading;
		this.todoModalObj.desc = this.formtodovalue.value.desc;

		this.api.postToDo(this.todoModalObj).subscribe(
			(res) => {
				console.log(res);
				this.getAllToDo();
				let ref = document.getElementById('cancel');
				ref?.click();
				this.formtodovalue.reset();
			},
			(err) => {
				alert('something went wrong');
			}
		);
	}

	deleteToDo(item: any) {
		this.api.deleteToDo(item.id).subscribe((res) => {
			alert('Employee deleted');
			this.getAllToDo();
		});
	}

	
	onEdit(item: any) {
		this.showAdd = false;
		this.showEdit = true;
		this.todoModalObj.id = item.id;
		this.formtodovalue.controls['heading'].setValue(item.heading);
		this.formtodovalue.controls['desc'].setValue(item.desc);

	}

	updateTodoDetails() {
		this.todoModalObj.heading = this.formtodovalue.value.heading;
		this.todoModalObj.desc= this.formtodovalue.value.desc;
	
		this.api
			.updateTodo(this.todoModalObj, this.todoModalObj.id)
			.subscribe((res) => {
				alert('Updated');
				let ref = document.getElementById('cancel');
				ref?.click();
				this.formtodovalue.reset();
				this.getAllToDo();
			});
	}

}
