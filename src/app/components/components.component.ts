import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

const height = window.innerHeight
@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styleUrls: ['./components.component.scss'],
    styles: [`
    div.section{
        min-height:`+ height + `px
    }
    `]
})

export class ComponentsComponent implements OnInit {
    page = 4;
    page1 = 5;
    focus;
    focus1;
    focus2;
    public height = height;
    title = 'Everest';
    lat = -8.816217;
    lng = 13.2349864;
    date: { year: number, month: number };
    model: NgbDateStruct;
    constructor(private renderer: Renderer2) { }
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: { month: number }) {
        return date.month !== current.month;
    }

    ngOnInit() {

        let input_group_focus = document.getElementsByClassName('form-control');
        let input_group = document.getElementsByClassName('input-group');
        for (let i = 0; i < input_group.length; i++) {
            input_group[i].children[0].addEventListener('focus', function () {
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function () {
                input_group[i].classList.remove('input-group-focus');
            });
        }
    }

    scroll(target) {
        debugger
        let elems = document.querySelectorAll('#navbarToggler ul li a.nav-link')
        let el = document.getElementById(target);
        el.scrollIntoView();

        for (var i = 0; i < elems.length; i++)
            elems[i].classList.remove('active');

        target.currentTarget.classList.add('active');
    }
}
