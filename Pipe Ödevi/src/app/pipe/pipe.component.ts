import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'CustomPipe' })
export class GetPow implements PipeTransform {
  transform(value: number, exponent = 1): number {
    return Math.pow(value, exponent);
  }
}
