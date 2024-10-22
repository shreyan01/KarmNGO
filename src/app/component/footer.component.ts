import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-between">
          <div class="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 class="text-2xl font-bold mb-4">Karm NGO</h3>
            <p class="mb-4">Empowering communities, changing lives</p>
            <div class="flex space-x-4">
              <a href="#" class="text-white hover:text-blue-400 transition duration-300">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="text-white hover:text-blue-400 transition duration-300">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="text-white hover:text-blue-400 transition duration-300">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div class="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 class="text-xl font-bold mb-4">Quick Links</h4>
            <ul>
              <li><a href="#about" class="hover:text-blue-400 transition duration-300">About Us</a></li>
              <li><a href="#beneficiaries" class="hover:text-blue-400 transition duration-300">Beneficiaries</a></li>
              <li><a href="#partners" class="hover:text-blue-400 transition duration-300">Partners</a></li>
              <li><a href="#donate" class="hover:text-blue-400 transition duration-300">Donate</a></li>
            </ul>
          </div>
          <div class="w-full md:w-1/3">
            <h4 class="text-xl font-bold mb-4">Contact Us</h4>
            <p>123 NGO Street, Charity City</p>
            <p>contact&#64;karmngo.org</p>
            <p>+1 (123) 456-7890</p>
            <div class="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.5522528391!2d77.33497345!3d28.6207434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce55d1f1f1f1f%3A0x4b0f0f0f0f0f0f0f!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
                width="100%" height="200" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
              </iframe>
            </div>
          </div>
        </div>
        <div class="mt-8 text-center">
          <p>&copy; 2023 Karm NGO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {}
