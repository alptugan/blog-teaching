---
banner: "[[cover-Physical-compution.jpg]]"
title: COD XXX Physical Computing
date: 2025-04-16 08:31:09
description: 
tags: 
aliases: 
draft: true
cssclasses:
  - wide-page
share_link: https://share.note.sx/c0tj8t1n#mySVNFIrLOrwbPWXmdIlGrgrMyUoEbyuw+B8pe01ax4
share_updated: 2025-05-30T21:52:30+03:00
---
## Course Objective
The educational objective of this course is to introduce students with little or no technical background to the foundational principles of physical computing through hands-on, project-based learning. By combining basic electronics, programming, and interaction design, the course empowers students to creatively explore and prototype interactive objects and environments.

## Course Description
This course provides an engaging introduction to the dynamic field of physical computing, specifically tailored for Communication Design students who may have limited or no prior experience with programming and electronics. Physical computing explores the exciting intersection between the digital realm and the tangible world, enabling the creation of interactive objects and environments through the use of computer hardware and software. This course will utilize popular microcontroller platforms such as Arduino and single-board computers like Raspberry Pi to facilitate hands-on, project-based learning.

The curriculum emphasizes the vast creative potential of these technologies within the disciplines of new media and interactive design. Students will progressively learn the fundamental concepts underpinning electronics, programming, and interaction design. This knowledge will empower them to prototype and develop innovative projects that are capable of sensing, responding to, and actively interacting with their surrounding environment. The course structure will follow a gradual progression, starting with basic principles and systematically advancing towards more intricate applications. This step-by-step approach is designed to build a strong foundation of understanding and skill, ultimately fostering a "design-through-making" ethos where experimentation and tangible creation are central to the learning process.

The focus on students with "no or beginner-level" experience is paramount to the course design. The syllabus and all instructional materials will explicitly address this, aiming to create a welcoming and supportive learning environment that demystifies technology and encourages exploration.

## Learning Objectives
Upon successful completion of this course, students will be able to:

1. **Explain** core concepts of physical computing and **identify** its applications within communication design and new media.
    
2. **Set up and operate** Arduino and Raspberry Pi platforms, including installing required software and executing basic interactive projects.
    
3. **Design and build** simple electronic circuits using components such as resistors, LEDs, and switches.
    
4. **Integrate** various input devices (e.g., sensors, buttons, potentiometers) with microcontrollers to collect and interpret physical data.
    
5. **Control** output devices (e.g., LEDs, motors, servos, speakers) to create interactive feedback in physical systems.
    
6. **Develop** basic programming skills including the use of variables, data types, control structures, and functions relevant to physical computing.
    
7. **Prototype** interactive systems using breadboards and iterative design techniques.
    
8. **Apply** fundamental interaction design principles to develop intuitive and engaging physical computing experiences.
    
9. **Document and present** project development and outcomes effectively, demonstrating technical understanding and design process.

## Hardware Requirements
Students enrolled in this course will be required to have access to either an Arduino microcontroller board (such as the widely used Arduino Uno) or a Raspberry Pi single-board computer (Model 4 or a comparable equivalent is recommended for optimal performance).1 Alongside the chosen platform, students are strongly encouraged to acquire a basic electronics starter kit. This kit should contain essential components necessary for completing the weekly exercises and initial assignments. A recommended list of components for the starter kit includes:

- A breadboard for prototyping circuits.
- An assortment of jumper wires (both male-to-male and male-to-female) for making connections on the breadboard.
- Light Emitting Diodes (LEDs) in various colors (red, green, blue, yellow).
- Resistors with different resistance values (e.g., 220Ω, 1kΩ, 10kΩ).
- Ten momentary push buttons.
- A potentiometer (10K and 100K) for creating analog inputs.
- A USB cable suitable for connecting the chosen microcontroller or single-board computer to a personal computer for programming and power.
- Light-dependent resistor (LDR) x 10
- _Optional but highly recommended for expanded project possibilities:_ A small DC motor, a servo motor, and a basic sensor such as a light-dependent resistor (LDR) or a temperature sensor (e.g., TMP36).

Detailed instructions on where to purchase these materials, along with recommendations for specific starter kits that are suitable for this course, will be provided to students prior to the commencement of the semester. While students have the flexibility to choose either the Arduino or Raspberry Pi platform, it is suggested that they select one to focus on during the initial weeks of the course. This approach will help to prevent cognitive overload and allow for a more focused learning experience as they grasp the fundamental concepts. However, the assignments and major projects for the course will be designed in a way that allows for adaptability to both platforms, encouraging students to explore the capabilities of their chosen hardware.

In addition to the physical hardware, students will also need consistent access to a personal computer with a reliable internet connection. This is essential for installing the necessary software development environments (such as the Arduino IDE or Raspberry Pi OS), accessing online tutorials and documentation, and utilizing other online resources that will be integral to the course.

### Where to Buy?
- [Direnc.net® - Türkiye'nin Elektronik Komponent ve Robotik Marketi](https://www.direnc.net/)
- [Robotistan \| Elektronik Malzeme Marketi Online Satış](https://www.robotistan.com/)
- [Arduino Setleri ve Fiyatları](https://robolinkmarket.com/set-cesitleri)
- Kadıköy Yazıcıoğlu İşhanı
- Karaköy Elektronikçiler Çarşısı

## Syllabus

| Week | Topic                                                                                                       | Readings                                                                                                                 | Tutorials                                                                                                                                          | Components                                                                                                                                      | Assignments                                                                                                                         |
| ---- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Introduction to Physical Computing: Concepts and Applications in Design                                     | Chapters 1-2 of "Physical Computing" by O'Sullivan and Igoe                                                              | "What is Arduino?"<br><br>Setup Wowki Account                                                                                                      |                                                                                                                                                 | Bring a broken electronic device and tools to detach it. Or find a cheap electronic toy from the market.<br><br>Install Arduino IDE |
| 2    | Getting Started with Arduino                                                                                | Getting Started with Arduino<br><br>Using Virtual Circuit Designer<br><br>Programming led lights                         | Installing the Arduino IDE<br>[video](https://arduino-tutorials.net/tutorial/blinking-led-on-arduino)<br>                                          | 1× Arduino<br>1× USB cable<br>1× Computer                                                                                                       | Make a blinking LED with variable blink speed.                                                                                      |
| 3    | Basic Electronics for Beginners: Understanding Circuits and Components                                      | Chapter 3 of "Physical Computing" <br><br>"Understanding a Circuit Diagram"                                              | Breadboard Basics  Resistor Color Codes<br>[video](https://arduino-tutorials.net/tutorial/blinking-led-on-breadboard-with-arduino)                 | 1× Arduino<br>1× Breadboard<br>1× LED<br>2× Jumper wire (male-male)<br>1× 470 Ohm (gold-brown-violet-yellow) resistor                           | Build a simple circuit with an LED, a resistor on a breadboard.                                                                     |
| 4    | Digital Input & Output: Reading Data from Buttons and Switches                                              | Chapter 4 of "Physical Computing"<br><br> "Digital Input" (Arduino Tutorial)<br> <br>"Digital Output" (Arduino Tutorial) | Reading a Digital Input with Arduino<br>[video](https://arduino-tutorials.net/tutorial/control-led-with-pushbutton-on-arduino)                     | 1× Arduino<br>1× Breadboard<br>3× Jumper wire (male-male)<br>1× Min 10K Ohm resistor<br>1× Push button / Tactile switch                         | Control an LED using a button press.                                                                                                |
| 5    | Introduction to Programming Logic: Variables, Control Structures                                            | Chapter 5 of "Physical Computing" <br><br><br>Arduino Programming Basics                                                 | Variables, Data Types, and Operators in Arduino<br><br>[video](https://www.youtube.com/watch?v=4fN1aJMH9mM)                                        | 1× Arduino<br>1× Breadboard<br>10× Jumper wire (male-male)<br>4× Min 10K Ohm resistor<br>4× LDR Sensors                                         | Create a pattern or sequence with multiple LEDs using LDR sensor.                                                                   |
| 6    | Analog Input: Working with Sensors (Potentiometer)                                                          | Chapter 6 of "Physical Computing"                                                                                        | Reading Analog Values with Arduino<br><br>[video](https://arduino-tutorials.net/tutorial/control-led-blinking-speed-with-potentiometer-on-arduino) |                                                                                                                                                 | Control the brightness of an LED using a potentiometer.                                                                             |
| 7    | Read room temperature using sensors.                                                                        |                                                                                                                          |                                                                                                                                                    | 1× Arduino<br>1× Breadboard<br>3× Jumper wire (male-male)<br>1× 4K7 Ohm (gold-red-violet-gold) resistor<br>1× 1-wire DS18B20 temperature sensor | Write a program that changes LED behavior based on the temperature.                                                                 |
| 8    | Making Sound Using Simple Buzzers                                                                           |                                                                                                                          | [video](https://arduino-tutorials.net/tutorial/play-sound-on-a-buzzer-beeper-piezo-speaker-with-arduino)                                           | 1× Arduino<br>1× Breadboard<br>3× Jumper wire (male-male)<br>3× Jumper wire (male-female)<br>1× buzzer/beeper/piezo speaker                     | Program a notification sounds using buzzer and momentary buttons.                                                                   |
| 9    | Measure distance with sound                                                                                 | "Interaction Design Practice" 15; Readings on Tangible User Interfaces                                                   | [video](https://arduino-tutorials.net/tutorial/measure-distance-with-the-hcsr04-ultrasonic-sensor-on-arduino)                                      | 1× Arduino<br>1× Breadboard<br>4× Jumper wire (male-male)<br>1× HC-SR04 ultra sonic distance sensor                                             | Play sound via buzzer according to the user distance to the sensor.                                                                 |
| 10   | Mini LCD and OLED information displays<br><br>Introduction to Interaction Design through Physical Computing | "Prototyping" <br>Iterative Design Principles                                                                            | [video](https://arduino-tutorials.net/tutorial/i2c-lcd-display-with-text-and-custom-symbols-on-arduino)                                            | 1× Arduino<br>1× Breadboard<br>5× Jumper wire (male-male)<br>1× I2C text LCD 16x2 or 20x4                                                       | Display text on an I2C LCD<br>Display custom symbols on I2C LCD<br>Change screens based on time<br>                                 |
| 11   | Project Development and Prototyping                                                                         |                                                                                                                          | Advanced Prototyping Techniques; Tips for Physical Computing Projects                                                                              |                                                                                                                                                 | Work on your chosen major project; focus on initial prototyping and testing. Present in class-time                                  |
| 12   | Project Development and Prototyping                                                                         |                                                                                                                          |                                                                                                                                                    |                                                                                                                                                 | Document your progress 1                                                                                                            |
| 13   | Project Development and Prototyping                                                                         |                                                                                                                          |                                                                                                                                                    |                                                                                                                                                 | Document your progress 2                                                                                                            |
| 14   | Project Development and Prototyping                                                                         |                                                                                                                          |                                                                                                                                                    |                                                                                                                                                 | Document your progress 3                                                                                                            |
| 15   | Final Project Presentations and Course Conclusion                                                           | Project Documentation Guidelines                                                                                         | Presentation Skills for Designers; Reflecting on Your Physical Computing Project                                                                   |                                                                                                                                                 | Present your final project to the class, demonstrating its functionality and design concept.                                        |

## Grading Policy
- Weekly assignments 30 %
- Attendance 20 %
- Final Project 70 %
- Students who fail to submit three or more assignments (3+) or who are absent from three or more classes (3+) will be considered to have failed the course.
- Students who do not submit the required project files will be deemed to have failed the course.
- Students who do not present their final project will be regarded as having failed the course.

## Recommended Readings and Resources
In addition to the required readings specified in the weekly schedule, the following resources are recommended for further exploration and learning:

**Books:**
- "Physical Computing: Sensing and Controlling the Physical World with Computers" by Tom Igoe and Dan O'Sullivan.
- "Getting Started with Arduino" by Massimo Banzi.
- "Make: Electronics" by Charles Platt.
- "Raspberry Pi Cookbook" by Simon Monk.

**Websites and Online Platforms:**
- Arduino Official Website ([https://www.arduino.cc/](https://www.arduino.cc/)).
- Raspberry Pi Foundation ([https://www.raspberrypi.org/](https://www.raspberrypi.org/)).
- SparkFun Tutorials ([https://learn.sparkfun.com/](https://learn.sparkfun.com/)).
- Adafruit Learning System ([https://learn.adafruit.com/](https://learn.adafruit.com/)).
- Instructables ([https://www.instructables.com/](https://www.instructables.com/)).
- Hackster.io ([https://www.hackster.io/](https://www.hackster.io/)).
- Arduino, ESP32, RPI Simulator [Wokwi](https://wokwi.com/).
- [Related Books and Articles – ITP Physical Computing](https://itp.nyu.edu/physcomp/resources/books/) List of useful books and website about electronics.

## Projects Pool
1. **Interactive Storytelling Device:** Design and prototype a device that tells a story or conveys a narrative through physical interaction, incorporating sensors, actuators, and user feedback. This project can explore themes of narrative, interactivity, and tangible media.
2. **Data Visualization through Physical Form:** Create a physical representation of a dataset using sensors and actuators. This project will focus on translating abstract data into tangible and interactive forms, exploring alternative methods of data communication.
3. **Responsive Environment Prototype:** Develop a prototype of an environment or object that responds to user presence or environmental conditions (e.g., light, sound, temperature). This project will emphasize the creation of interactive and context-aware spaces or objects.
4. **Tangible Interface for Digital Media:** Design and prototype a physical interface for controlling or interacting with digital media (e.g., sound, video, graphics). This project will explore the creation of intuitive and engaging alternatives to traditional screen-based interfaces.
5. **Socially Interactive Object:** Create an interactive object or system designed to facilitate social interaction or communication between people. This project can explore themes of connection, play, and shared experience through physical computing.
6. **Interactive Poster:** Create an interactive poster for a movie, event or organization based on physical interaction.
7. **Interaction Design Prototype:** Create a working prototype of your projects learned in Interaction Design courses.
8. **Tiny Screen Interface:** Create a tiny screen interface using OLED or LCD 16x2 displays giving feedback to user interaction with an imagery product. [Ref1](https://www.youtube.com/watch?v=HVHVkKt-ldc)
## Assignments
Weekly assignments will primarily involve hands-on exercises and small creative tasks designed to solidify the concepts introduced in lectures and readings. These assignments will progressively increase in complexity, starting with basic setup and component control and moving towards more integrated and interactive systems. Students will be encouraged to document their process and outcomes, fostering a habit of reflective practice. Some assignments may involve short written reflections or analyses of existing physical computing projects to encourage critical thinking and observation skills. The assignments will be adaptable to both Arduino and Raspberry Pi, allowing students to work with their chosen platform.

## Showcase


## Resources and links 
[Micro:bit Educational Foundation \| micro:bit](https://microbit.org/)

[List from ITP](https://itp.nyu.edu/physcomp/resources/parts-and-tools-guide/)

