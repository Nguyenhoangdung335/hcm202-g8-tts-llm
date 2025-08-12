import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    # Database configuration
    DATABASE_URL: str = os.getenv("DATABASE_URL", "postgresql://postgres:12345@localhost:5432/hcm202_chatbot")

    # Redis configuration
    REDIS_URL: str = os.getenv("REDIS_URL", "redis://localhost:6379")

    # JWT configuration
    JWT_SECRET: str = os.getenv("JWT_SECRET", "your_secret_key")
    JWT_ALGORITHM: str = os.getenv("JWT_ALGORITHM", "HS256")
    JWT_EXPIRATION_TIME: int = int(os.getenv("JWT_EXPIRATION_TIME", "3600"))  # Default to 1 hour

    # QDRant configuration
    QDRANT_URL: str = os.getenv("QDRANT_URL", "http://localhost:6333")
    QDRANT_COLLECTION: str = os.getenv("QDRANT_COLLECTION", "chatbot_thoughts")

    # Model paths
    whisper_model: str = "small"
    tts_model_path: str = "/app/models/vits"

    class Config:
        env_file = ".env"

settings = Settings()