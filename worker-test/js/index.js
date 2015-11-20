var someWorker = new Worker("./workers/some-worker.js");

someWorker.onmessage = function (ev) {
    console.log(ev.data);
};
