# backend/app/services/auth_service.py

from datetime import datetime
from passlib.context import CryptContext
from datetime import datetime, timedelta
from jose import jwt
from backend.app.config import settings

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def verify_password(plain_password, hashed_password):
    """
    Verify a plain password against a hashed password.

    Args:
        plain_password (str): The plain text password to verify.
        hashed_password (str): The hashed password to compare against.

    Returns:
        bool: True if the passwords match, False otherwise.
    """
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    """
    Hash a password using bcrypt.

    Args:
        password (str): The plain text password to hash.

    Returns:
        str: The hashed password.
    """
    return pwd_context.hash(password)

def create_access_token(data: dict):
    """
    Create an access token with the given data and expiration.

    Args:
        data (dict): The data to encode in the token.

    Returns:
        str: The encoded JWT access token.
    """

    to_encode = data.copy()
    # expire = datetime.now() + settings.JWT_EXPIRATION_TIME
    expire = datetime.now()

    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})

    return jwt.encode(to_encode, "SECRET_KEY", algorithm="HS256")