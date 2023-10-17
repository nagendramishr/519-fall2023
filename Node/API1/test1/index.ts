import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const queueOutput = output.storageQueue({
    queueName: 'js-queue-items',
    connection: 'MyStorageConnectionAppSetting',
});

app.http('test1', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    extraOutputs: [queueOutput],
    handler: async (request, context) => {
        
    context.log('HTTP trigger function processed a request.');
    const body = await request.text();
    context.extraOutputs.set(queueOutput, body);
    return { body: 'Created queue item.' };
    },
});
