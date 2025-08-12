# backend/app/models/chat_session.py
from datetime import datetime

from sqlalchemy import Integer, Text, DateTime, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.sql import func

from backend.app.database import Base


class ChatSession(Base):
    __tablename__ = "chat_sessions"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    user_id: Mapped[int] = mapped_column(Integer, ForeignKey("users.id"), nullable=False)
    user: Mapped["User"] = relationship("User", back_populates="chat_sessions")
    question: Mapped[str] = mapped_column(Text, nullable=False)
    answer: Mapped[str] = mapped_column(Text)
    counter_questions: Mapped[str] = mapped_column(Text)
    counter_answers: Mapped[str] = mapped_column(Text)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now()
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), onupdate=func.now()
    )

    def __repr__(self):
        return (f"<ChatSession(id={self.id}, user_id={self.user_id}, "
                f"question={self.question}, answer={self.answer}, "
                f"counter_questions={self.counter_questions}, "
                f"counter_answers={self.counter_answers}, "
                f"created_at={self.created_at}, updated_at={self.updated_at})>")
