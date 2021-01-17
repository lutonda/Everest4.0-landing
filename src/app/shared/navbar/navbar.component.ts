import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;
    private elems;
    constructor(public location: Location, private element: ElementRef) {
        this.sidebarVisible = false;
    }

    scroll(target) {
        
        let elems=document.querySelectorAll('#navbarToggler ul li a.nav-link')
        let el = document.getElementById(target.currentTarget.attributes.target.value);
        el.scrollIntoView();

        for (var i = 0; i < elems.length; i++)
        elems[i].classList.remove('active');
    
        target.currentTarget.classList.add('active');
    }
    
    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];

        this.elems = document.querySelectorAll('#navbarToggler ul li a.nav-link');

        /*window.addEventListener("scroll", navHighlighter);
        let sections=document.querySelectorAll("section[id]");
        function navHighlighter() {
        
        // Get current scroll position
        let scrollY = window.pageYOffset;
        
        // Now we loop through sections to get height, top and ID values for each
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            sectionId = current.getAttribute("id");
            
            /*
            - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
            - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
            * /
            if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
            ){
            document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
            } else {
            document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
            }
        });
        }*/

    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');

        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };
    isHome() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        if (titlee === '/home') {
            return true;
        }
        else {
            return false;
        }
    }
    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    }
}
