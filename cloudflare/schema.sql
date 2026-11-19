CREATE TABLE IF NOT EXISTS messages (id TEXT PRIMARY KEY, session TEXT NOT NULL, role TEXT NOT NULL, text TEXT NOT NULL, created_at INTEGER NOT NULL);
CREATE INDEX IF NOT EXISTS messages_session ON messages(session,created_at);
CREATE INDEX IF NOT EXISTS messages_age ON messages(created_at);
CREATE TABLE IF NOT EXISTS daily_usage (day TEXT PRIMARY KEY, count INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS leads (id TEXT PRIMARY KEY, phone TEXT NOT NULL, note TEXT NOT NULL, created_at INTEGER NOT NULL);
