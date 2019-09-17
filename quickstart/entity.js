async function entity() {
    const language = require('@google-cloud/language');
    const client = new language.LanguageServiceClient();
    // const text = `Creating a global footprint and access to scale are one of the many best practices at AWS. By creating architectures that take advantage of that scale and also efficient data utilization (in both performance and cost), you can start to see how important access is at scale. For example, within autonomous vehicles (AV) development, data is geographically acquired local to the driving campaign. It is relevant and more efficient from a machine learning (ML) perspective to execute the compute pipeline in the same AWS Region as the generated data.`;
    const text = `Multiregion serverless distributed training with AWS Batch and Amazon SageMaker`;
    const document = {
      content: text,
      type: 'PLAIN_TEXT',
      encodingType: 'UTF8'
    };
  
    const [result] = await client.analyzeEntities({document: document});
    const entities = result.entities;
  
    console.log(`Text: ${text}`);
    console.log(JSON.stringify(entities));
}

entity().catch(console.error);
