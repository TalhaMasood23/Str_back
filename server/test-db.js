const { Inquiry } = require('./models');

async function test() {
  try {
    console.log('Testing Inquiry model...');
    const count = await Inquiry.count();
    console.log('Current Inquiry count:', count);
    
    console.log('Attempting to create a test inquiry...');
    const testInquiry = await Inquiry.create({
      name: 'System Test',
      email: 'system@test.com',
      subject: 'Test subject',
      message: 'Test message',
      status: 'new'
    });
    console.log('Successfully created inquiry:', testInquiry.id);
    
    await testInquiry.destroy();
    console.log('Test inquiry cleaned up.');
  } catch (err) {
    console.error('TEST FAILED:');
    console.error(err);
  } finally {
    process.exit();
  }
}

test();
