# Supermemory Architecture

Deep dive into how Supermemory works under the hood.

## Core Concept: Living Knowledge Graph

Supermemory fundamentally differs from traditional document storage systems. Instead of maintaining static files in folders, it constructs **a living knowledge graph** where content becomes dynamically interconnected.

### Traditional vs. Supermemory Approach

**Traditional Document Storage:**
```
Folder/
├── document1.pdf (static file)
├── document2.pdf (static file)
└── notes.txt (static file)
```
- Files stored as-is
- No relationships between content
- Keyword-based search only
- No automatic updates

**Supermemory Knowledge Graph:**
```
Knowledge Graph
├── Memory: "User prefers TypeScript"
│   ├── Updates → Memory: "User prefers TypeScript with strict mode"
│   └── Extends → Memory: "User completed TypeScript tutorial"
├── Memory: "Project uses React 18"
│   └── Derives → Memory: "Project likely uses hooks and concurrent features"
```
- Content broken into semantic memories
- Rich relationships between memories
- Semantic understanding
- Automatic knowledge evolution

## Content Processing Pipeline

Every piece of content goes through a six-stage pipeline:

### 1. Queued
Document enters the processing queue. The system validates the content type and prepares for extraction.

**What happens:**
- Content type detection (PDF, image, video, URL, text)
- Validation of metadata and container tags
- Assignment to processing queue

### 2. Extracting
Content is extracted from various formats into raw text.

**Supported formats:**
- **Text**: Plain text, markdown, code
- **URLs**: Web pages, articles, blogs
- **Documents**: PDFs, Word docs, Google Docs
- **Images**: OCR for text extraction, image understanding
- **Videos**: Transcription, scene detection
- **Audio**: Speech-to-text conversion

**What happens:**
- Format-specific extraction (PDF parsing, OCR, transcription)
- Metadata extraction (title, author, date)
- Content normalization

**Example:**
```
Input:  PDF document (100 pages)
Output: Extracted text (~50,000 words)
Time:   1-2 minutes
```

### 3. Chunking
Content divides into meaningful semantic segments.

**Chunking strategy:**
- Not fixed-size (e.g., 500 words)
- Semantic boundaries (paragraphs, sections, concepts)
- Context preservation (overlap between chunks)
- Optimal size for embedding models

**Example:**
```
Input:  50,000 word article
Output: ~100-200 semantic chunks
Logic:  Each chunk represents a coherent idea/concept
```

**Why semantic chunking?**
- Better retrieval accuracy
- Preserves context and meaning
- Reduces irrelevant results
- Enables precise citation

### 4. Embedding
Vector embeddings are generated for similarity matching.

**Process:**
- Each chunk converted to high-dimensional vector (e.g., 1536 dimensions)
- Uses state-of-the-art embedding models
- Captures semantic meaning, not just keywords
- Enables similarity search

**Example:**
```javascript
Chunk: "TypeScript provides type safety"
Vector: [0.023, -0.145, 0.876, ..., 0.234] // 1536 dimensions

Chunk: "Static typing catches errors early"
Vector: [0.019, -0.139, 0.881, ..., 0.228] // Similar vector!
```

**Why embeddings?**
- Semantic search (meaning, not keywords)
- Language-agnostic (works across languages)
- Context understanding
- Relationship discovery

### 5. Indexing
Relationships are established between memories.

**Three relationship types:**

**Updates**: Track when new information supersedes old knowledge
```
Memory 1: "User prefers React 17"
Memory 2: "User now uses React 18"
Relationship: Memory 2 updates Memory 1 (isLatest = true)
```

**Extends**: Link enriching information that adds context
```
Memory 1: "User likes TypeScript"
Memory 2: "User completed advanced TypeScript course"
Relationship: Memory 2 extends Memory 1
```

**Derives**: Infer novel connections from pattern analysis
```
Memory 1: "User reads ML papers daily"
Memory 2: "User asks about neural networks"
Memory 3: "User works on AI projects"
Derived: "User is an ML engineer/researcher"
```

**Graph structure:**
```
    [Memory A]
    /    |    \
Updates Extends Derives
   /      |      \
[B]     [C]     [D]
```

### 6. Done
Processing complete. Content is now fully searchable and integrated into the knowledge graph.

**What you get:**
- Searchable memories
- Queryable via semantic search
- Integrated into user profiles
- Available for retrieval

**Typical processing times:**
- **Text**: Instant to 10 seconds
- **URLs**: 10-30 seconds
- **PDFs (100 pages)**: 1-2 minutes
- **Videos**: 5-10 minutes
- **Large documents**: Up to 15 minutes

## Memory Storage System

### Static vs. Dynamic Memories

**Static Memories** (`isStatic: true`):
- Permanent facts that don't change
- Examples: name, profession, birthday
- Not subject to temporal updates
- High priority in retrieval

**Dynamic Memories** (`isStatic: false`):
- Contextual, episodic information
- Examples: recent conversations, activities
- Can be updated or superseded
- Time-sensitive relevance

### Memory Versioning

Supermemory maintains version history through the `Updates` relationship:

```
Memory v1: "User prefers Vue" (isLatest: false)
    ↓ Updates
Memory v2: "User prefers React" (isLatest: false)
    ↓ Updates
Memory v3: "User prefers React with TypeScript" (isLatest: true)
```

When querying, you can choose:
- Latest version only (default)
- Full version history
