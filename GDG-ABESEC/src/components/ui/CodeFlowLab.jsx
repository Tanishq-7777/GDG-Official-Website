import React from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";

const sketch = (p5) => {
  let particles = [];
  const numParticles = 3000;
  const noiseScale = 0.01;
  const colors = ["#4285F4", "#EA4335", "#FBBC05", "#34A853"]; // Google Colors

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle(p5));
    }
    p5.background(10, 10, 10); // Dark background
  };

  p5.draw = () => {
    // Fade effect for trails
    p5.noStroke();
    p5.fill(10, 10, 10, 20); // Low opacity black for trails
    p5.rect(0, 0, p5.width, p5.height);

    for (let particle of particles) {
      particle.update();
      particle.show();
      particle.edges();
      particle.follow(noiseScale);
      particle.repel(p5.mouseX, p5.mouseY);
    }
  };

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    p5.background(10, 10, 10);
  };

  class Particle {
    constructor(p) {
      this.p = p;
      this.pos = p.createVector(p.random(p.width), p.random(p.height));
      this.vel = p.createVector(0, 0);
      this.acc = p.createVector(0, 0);
      this.maxSpeed = 2;
      this.prevPos = this.pos.copy();
      this.color = p.color(p.random(colors));
    }

    update() {
      this.vel.add(this.acc);
      this.vel.limit(this.maxSpeed);
      this.pos.add(this.vel);
      this.acc.mult(0);
    }

    follow(scale) {
      let angle = this.p.noise(this.pos.x * scale, this.pos.y * scale) * this.p.TWO_PI * 2;
      let force = this.p.Vector.fromAngle(angle);
      force.mult(0.5);
      this.applyForce(force);
    }

    applyForce(force) {
      this.acc.add(force);
    }

    repel(targetX, targetY) {
      let mouse = this.p.createVector(targetX, targetY);
      let dir = this.p.Vector.sub(this.pos, mouse);
      let d = dir.mag();
      if (d < 150) {
        dir.setMag(5); // Repulsion strength
        this.applyForce(dir);
      }
    }

    show() {
      this.p.stroke(this.color);
      this.p.strokeWeight(1.5);
      this.p.point(this.pos.x, this.pos.y);
      // For smoother trails, we could draw lines from prevPos, but points are faster for 3000+
      // this.p.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
      this.updatePrev();
    }

    updatePrev() {
      this.prevPos.x = this.pos.x;
      this.prevPos.y = this.pos.y;
    }

    edges() {
      if (this.pos.x > this.p.width) {
        this.pos.x = 0;
        this.updatePrev();
      }
      if (this.pos.x < 0) {
        this.pos.x = this.p.width;
        this.updatePrev();
      }
      if (this.pos.y > this.p.height) {
        this.pos.y = 0;
        this.updatePrev();
      }
      if (this.pos.y < 0) {
        this.pos.y = this.p.height;
        this.updatePrev();
      }
    }
  }
};

const CodeFlowLab = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <ReactP5Wrapper sketch={sketch} />
    </div>
  );
};

export default CodeFlowLab;
