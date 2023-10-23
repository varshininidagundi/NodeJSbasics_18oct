var readline =require('readline-sync');

    let queue = [];
    let rear=-1;
    let front=0;
    function enqueue() {
        let element= readline.question("enter the element you want to push into array");
        rear=rear+1;
        queue[rear]=element;
        console.log("QUEUE ---"+queue)
        console.log("rear is at "+rear)
        console.log("front is at "+front)
    }
    function dequeue(){
        console.log("queue before eliminating",queue);
        if (front > rear) {
            console.log("Queue is empty.");
            return;
        }
        let removedElement = queue[front];
        for (let i = front; i < rear; i++) {
            queue[i] = queue[i + 1];
        }
    rear = rear - 1;
    queue.length=queue.length-1;
        //queue[rear + 1] = undefined;

    console.log("Removed element: " , removedElement);
    console.log("Queue after eliminating", queue);
    }
    /*function dequeue() {
        console.log("queue before eliminating", queue);
    
        // Check if the queue is empty
        if (queue.length === 0) {
            console.log("Queue is empty.");
            return;
        }
    
        // Remove the first item from the queue
        queue = queue.slice(1);
    
        console.log("queue after eliminating", queue);
    }*/


do{
    var choice=readline.question("1 for enqueue\n2 for dequeue")
    switch(choice){
        case "1":
            enqueue();
            break;
        case "2":
            dequeue();
            break;
        default:
            console.log("invalide");
    }
}while(true);
