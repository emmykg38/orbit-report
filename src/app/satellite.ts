import { Component, OnInit } from '@angular/core';


export class Satellite implements OnInit {

    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;

  constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) { }

  ngOnInit() {
  }

}


