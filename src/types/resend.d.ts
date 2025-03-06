declare module 'resend' {
  export interface ResendEmailResponse {
    data?: {
      id: string;
    };
    error?: {
      message: string;
      statusCode: number;
    };
  }

  export interface SendEmailOptions {
    from: string;
    to: string | string[];
    subject: string;
    html?: string;
    text?: string;
    cc?: string | string[];
    bcc?: string | string[];
    reply_to?: string;
    attachments?: Array<{
      content: string | Buffer;
      filename: string;
    }>;
  }

  export class Resend {
    constructor(apiKey: string);
    
    emails: {
      send(options: SendEmailOptions): Promise<ResendEmailResponse>;
    };
  }
}
