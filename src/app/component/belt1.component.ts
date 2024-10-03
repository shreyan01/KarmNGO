import { Component} from "@angular/core";

@Component({
    selector:'belt',
    standalone:true,
    template:`
    <div class="relative overflow-hidden h-10">
        <div class="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-50 blur-md z-0">
            <div class="flex animate-slide h-full">
                <div class="w-full flex-shrink-0"></div>
                <div class="w-full flex-shrink-0"></div>
                <div class="w-full flex-shrink-0"></div>
                <div class="w-full flex-shrink-0"></div>
            </div>
        </div>
    </div>

    `,
    styles: [
        `
        .animate-slide {
            animation: slide 10s linear infinite;
        }

        @keyframes slide {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(-100%);
            }
        }
        `
    ]
})
export class Belt1Component {
}