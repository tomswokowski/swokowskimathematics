import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER, // E.g. us1
});

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: any, res: any) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    let audienceId = process.env.MAILCHIMP_AUDIENCE_ID || '';
    await mailchimp.lists.addListMember(audienceId, {
      email_address: email,
      status: 'subscribed',
    });
    return res.status(201).json({ error: '' });
  } catch (error: any) {
    return res
      .status(500)
      .json({ error: 'An error has occurred adding you to the list.' });
  }
};
