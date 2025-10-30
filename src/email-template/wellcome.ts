export const getWellcomeEmail = (data: { name: string }) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Our Platform</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 40px 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        
        <!-- Header -->
        <div style="text-align: center; margin-bottom: 30px; border-bottom: 3px solid #667eea; padding-bottom: 20px;">
            <h1 style="color: #333; margin: 0; font-size: 28px;">Welcome to Our Platform! 🎉</h1>
        </div>
        
        <!-- Body Content -->
        <div style="color: #555; line-height: 1.6; font-size: 16px;">
            <p style="margin: 0 0 20px 0;">Hi <strong style="color: #667eea;">${data.name}</strong>,</p>
            
            <p style="margin: 0 0 20px 0;">Thank you for signing up! We're thrilled to have you join our community. Your account has been successfully created and is ready to use.</p>
            
            <!-- Features Section -->
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
                <h3 style="color: #333; margin-top: 0; margin-bottom: 15px;">What's Next?</h3>
                <ul style="margin: 0; padding-left: 20px; color: #666;">
                    <li style="margin-bottom: 10px;">Verify your email address by clicking the link below</li>
                    <li style="margin-bottom: 10px;">Complete your profile information</li>
                    <li style="margin-bottom: 10px;">Start exploring our features</li>
                    <li>Connect with our community</li>
                </ul>
            </div>
            
            <p style="margin: 20px 0;">If you didn't create this account, please ignore this email.</p>
        </div>
        
        <!-- CTA Button -->
        <div style="text-align: center; margin: 30px 0;">
            <a href="{{VERIFICATION_LINK}}" style="display: inline-block; background-color: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 16px;">Verify Your Email</a>
        </div>
        
        <!-- Footer -->
        <div style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 30px; color: #999; font-size: 14px; text-align: center;">
            <p style="margin: 0 0 10px 0;">© 2025 Your Company Name. All rights reserved.</p>
            <p style="margin: 0;">Need help? <a href="{{SUPPORT_LINK}}" style="color: #667eea; text-decoration: none;">Contact us</a></p>
        </div>
    </div>
</body>
</html>`;
};
