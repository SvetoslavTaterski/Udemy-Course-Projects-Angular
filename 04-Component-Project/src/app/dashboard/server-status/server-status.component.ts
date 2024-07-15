import { Component, DestroyRef, OnDestroy, OnInit, effect, inject, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');

  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      console.log(this.currentStatus());
    });
  }

  // ngOnDestroy() {
  //   clearTimeout(this.interval);
  // }

  ngOnInit() {
    const interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    })
  }

  ngAfterViewInit(){
    console.log('After view init');
  }
}
