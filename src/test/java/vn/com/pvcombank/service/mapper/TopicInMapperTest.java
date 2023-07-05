package vn.com.pvcombank.service.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class TopicInMapperTest {

    private TopicInMapper topicInMapper;

    @BeforeEach
    public void setUp() {
        topicInMapper = new TopicInMapperImpl();
    }
}
