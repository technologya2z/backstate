package vn.com.pvcombank.service.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class TopicOutMapperTest {

    private TopicOutMapper topicOutMapper;

    @BeforeEach
    public void setUp() {
        topicOutMapper = new TopicOutMapperImpl();
    }
}
