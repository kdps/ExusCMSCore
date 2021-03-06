<?php

class AES256CBC {
	
	const METHOD = 'aes-256-cbc';
    
    public static function encrypt($message, $key)
    {
        if (mb_strlen($key, '8bit') !== 32) {
            throw new Exception("Needs a 256-bit key!");
        }
		
        $ivsize = openssl_cipher_iv_length(self::METHOD);
        $iv = openssl_random_pseudo_bytes($ivsize);
        
        $ciphertext = openssl_encrypt(
            $message,
            self::METHOD,
            $key,
            OPENSSL_RAW_DATA,
            $iv
        );
        
        return base64_encode($iv . $ciphertext);
    }

    public static function decrypt($message, $key)
    {
		$message = base64_decode($message);
		
        if (mb_strlen($key, '8bit') !== 32) {
            throw new Exception("Needs a 256-bit key!");
        }
		
        $ivsize = openssl_cipher_iv_length(self::METHOD);
        $iv = mb_substr($message, 0, $ivsize, '8bit');
        $ciphertext = mb_substr($message, $ivsize, null, '8bit');
        
        return openssl_decrypt(
            $ciphertext,
            self::METHOD,
            $key,
            OPENSSL_RAW_DATA,
            $iv
        );
    }
	
}

?>