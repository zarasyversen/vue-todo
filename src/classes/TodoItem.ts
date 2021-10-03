export class TodoItem implements ITodoItem {
    public id: number;
    public title: string;
    public completed: boolean;
    public updated: boolean;
    public day: string;
    public time: string;

    constructor() {
        this.id = Math.random() * 1000;
        this.title =  '';
        this.completed = false;
        this.updated = false;
        this.day = this.getCurrentDay();
        this.time = this.getCurrentTime();
    }

    private getCurrentTime(): string {
        const now = new Date();
        const currentHours: number = now.getHours();
        let currentMinutes: number | string = now.getMinutes();

        if (currentMinutes < 10) {
            currentMinutes = `0${currentMinutes}`;
        }

        return `${currentHours}:${currentMinutes}`;
    }

    public getCurrentDay() : string {
        const date = new Date();
        const currentDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
        const currentDay = date.toLocaleString("en-GB", { weekday: "long" });
        return `${currentDay} (${currentDate})`;
    }

}

export interface ITodoItem {
    id: number,
    title: string,
    completed: boolean,
    updated: boolean,
    day: string,
    time: string,
}