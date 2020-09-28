# Working with Material-Design

https://material.angular.io/guide/getting-started

## Step 1: Install Angular Material, Angular CDK and Angular Animations

    yarn add @angular/material @angular/cdk @angular/animations

## Using schematics

Angular Material comes packaged with Angular CLI schematics to make creating Material applications easier.

    ng generate @angular/material:address-form  --skip-import       AddressForm
    ng generate @angular/material:nav           --skip-import       Nav
    ng generate @angular/material:table         --skip-import       Table
    ng generate @angular/material:dashboard     --skip-import       Dashboard
    ng generate @angular/material:tree          --skip-import       Tree
    ng generate @angular/cdk:drag-drop          --skip-import       DragDrop
